// iOS code

// Import a library to help create a component
import React from 'react';
import ReactNative from 'react-native';

// Create a component
const App = () => {
  return (
    // JSX - a dialect of JS that follows the semantics of HTML
    // Method to communicate to React Native what should be displayed on mobile device
    // Looks like HTML but translates into JS React function calls
    <Text>Some Text</Text>
  );
};

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
