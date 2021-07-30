import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './routes/Routes';

export const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
