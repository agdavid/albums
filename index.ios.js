// iOS code

// Import a library to help create a component
import React from 'react';
  // Access the specific registries of the entire ReactNative library
import { Text, AppRegistry } from 'react-native';
  // Access an exported component through relative path
import Header from './src/components/header';

// Create a component
const App = () => (
  <Header headerText={'Albums'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
