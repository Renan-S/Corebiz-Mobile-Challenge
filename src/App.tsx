import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './routes/Routes';
import Loading from './components/loading/Loading';

export const App = () => {
  return (
    <NavigationContainer>
      <Routes />
      {
        <Loading
          ref={ref => {
            (global as any).mLoadingComponentRef = ref;
          }}
        />
      }
    </NavigationContainer>
  );
};
