import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeController} from '../pages/home/HomeController';
import {DetailsPage} from '../pages/details/DetailsPage';
import {FavoritePage} from '../pages/favorites/FavoritePage';

const {Screen, Navigator} = createStackNavigator();

export const Routes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeController} />
      <Screen name="Details" component={DetailsPage} />
      <Screen name="Favorites" component={FavoritePage} />
    </Navigator>
  );
};
