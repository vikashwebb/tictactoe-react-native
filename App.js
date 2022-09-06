import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icons from './component/Icons';
import Snackbar from 'react-native-snackbar';
import {Text, NativeBaseProvider} from 'native-base';
const itemArray = new Array(9).fill('empty');
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');
  const [isDrow, setIsDraw] = useState(false);

  const changeItem = itemNumber => {
    console.log('outside winMessage', winMessage);

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'This box is already filled',
        backgroundColor: '#D7DF01',
        textColor: '#000',
      });
    }

    checkIswinner();
  };
  const checkIswinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] != 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] != 'empty'
    ) {
      setWinMessage(`${itemArray[3]} Wins`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] != 'empty'
    ) {
      setWinMessage(`${itemArray[6]} Wins`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] != 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] != 'empty'
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] != 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] != 'empty'
    ) {
      setWinMessage(`${itemArray[1]} Wins`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] != 'empty'
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    } else if (
      winMessage != '' &&
      itemArray[0] != 'empty' &&
      itemArray[1] != 'empty' &&
      itemArray[2] != 'empty' &&
      itemArray[3] != 'empty' &&
      itemArray[4] != 'empty' &&
      itemArray[5] != 'empty' &&
      itemArray[6] != 'empty' &&
      itemArray[7] != 'empty' &&
      itemArray[8] != 'empty'
    ) {
      setIsDraw('true');
      Snackbar.show({
        text: 'The match was drow',
        backgroundColor: '#084B8A',
        textColor: '#fff',
      });
    }
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: 'green',
        textColor: '#fff',
      });
    }
  };
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };
  return (
    <View
      style={{
        backgroundColor: '#5DA3FA',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <NativeBaseProvider>
        <View style={styles.grid}>
          {itemArray.map((item, index) => (
            <TouchableOpacity
              onPress={() => changeItem(index)}
              style={styles.box}
              key={index}>
              <Icons name={item} />
            </TouchableOpacity>
          ))}
          {winMessage ? (
            <View style={{width: '100%'}}>
              <View style={styles.winMsg}>
                <Text style={styles.trunMsgText}>{winMessage}</Text>
              </View>
              <TouchableOpacity
                style={styles.reloadButton}
                onPress={reloadGame}>
                <Text style={styles.trunMsgText}>Reload Game</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.trunMsg}>
              <Text style={styles.trunMsgText}>
                {' '}
                {isCross ? 'cross' : 'circle'} Trun{' '}
              </Text>
            </View>
          )}
          {isDrow ? (
            <TouchableOpacity style={styles.reloadButton} onPress={reloadGame}>
              <Text style={styles.trunMsgText}> asdf Reload Game</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </NativeBaseProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    marginTop: 100,
  },
  box: {
    width: '25%',
    height: 80,
    backgroundColor: '#5DA3FA',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  reloadButton: {
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#5DA3FA',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
    width: '90%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winMsg: {
    backgroundColor: '#120E43',
    borderWidth: 1,
    borderColor: '#120E43',
    marginHorizontal: 10,
    marginVertical: 30,
    width: '90%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trunMsg: {
    backgroundColor: '#5DA3FA',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
    marginVertical: 30,
    width: '90%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trunMsgText: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    marginTop: 20,
    backgroundColor: '#4652b3',
    padding: 10,
    width: '100%',
  },
});

export default App;
