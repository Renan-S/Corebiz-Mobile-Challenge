import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeController} from '../pages/home/HomeController';
import {Index} from '../pages/home/Test';
import {DetailsPage} from '../pages/details/DetailsPage';

const {Screen, Navigator} = createStackNavigator();

export const Routes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeController} />
      <Screen name="Index" component={Index} />
      <Screen name="Details" component={DetailsPage} />
      <Screen name="Favorites" component={Index} />
    </Navigator>
  );
};
