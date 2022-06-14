//Modules
import React from 'react';
import { StatusBar, View } from 'react-native';

//Screens
import Basket from './src/screens/Basket';
import mock from './src/mocks/basket'

export default function App() {
  return (
    <View>
        <StatusBar />
        <Basket { ...mock }/>
    </View>
  );
}