// iOS code

// Import a library to help create a component
import React from 'react';
  // Access the specific registries of the entire ReactNative library
import { AppRegistry, View } from 'react-native';
  // Access an exported component through relative path
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
