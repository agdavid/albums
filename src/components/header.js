// Import library for making a component
import React from 'react';
import { Text } from 'react-native';

// Make a comonent
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
}

// Make component available to other parts of the app
export default Header;
