/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import AuthProvider from './src/contexts/auth.js';
import Auth from './src/routes/Auth.js';




import Home from './src/routes/Home.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer> 
      <AuthProvider>
        <Home /> 
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;
