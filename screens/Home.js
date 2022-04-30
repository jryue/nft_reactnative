import React from 'react';
import {useState } from 'react';
import { View, SafeArea, FlatList, Text } from 'react-native';

// FlatList renders items only when they are about to appear on screen; lowers memory usage
// SafeArea component used to render content within safe area boundaries of a device; makes sure everything fits on screen
// View is just the basic DIV component

import {COLORS, NFTData } from '../constants';

const Home = () => {
  return (
    //<div>Home</div>
    <Text>Home</Text>
  )
}

export default Home