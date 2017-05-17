// iOS code

// Import a library to help create a component
import React from 'react';
  // Access the specific registries of the entire ReactNative library
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
  // JSX - a dialect of JS that follows the semantics of HTML
  // Method to communicate to React Native what should be displayed on mobile device
  // Looks like HTML but translates into JS React function calls
  <Text>Some Text</Text>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
