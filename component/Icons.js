import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icons = ({name}) => {
  switch (name) {
    case 'circle':
      return <Ionicons name="ellipse-outline" size={45} color="#fff" />;

    case 'cross':
      return <Ionicons name="close-outline" size={45} color="#fff" />;

    default:
      return <Ionicons name="pencil-sharp" size={45} color="#fff" />;
  }
};

export default Icons;
