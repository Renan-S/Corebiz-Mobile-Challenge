import {HomePage} from './HomePage';
import React, {useEffect, useState} from 'react';
import {NavigationStackProp} from 'react-native-stack';
import {getStarWarsPeople} from '../../services/StarWarsService';
import {useFavorites} from '../../components/useFavorites';

export const HomeController = ({navigation}: NavigationStackProp) => {
  const [people, setPeople] = useState([{}]);
  const [favorites, setFavorites] = useFavorites({});

  let loading = false;

  useEffect(() => {
    requestStartWarsPeople();
  }, []);

  const requestStartWarsPeople = async () => {
    const response = await getStarWarsPeople;
    setPeople(response.results);
  };

  // const requestStartWarsMovies = async () => {
  //   const response = await getStarWarsMovies;
  //   response.results.forEach(element => {
  //     console.log(element.title, element.episode_id);
  //   });
  // };

  // const requestStartWarsSpecies = async () => {
  //   const response = await requestStartWarsSpecies;
  //   response.results.forEach(element => {
  //     console.log(element.title, element.episode_id);
  //   });
  // };

  // const requestStartWarsVehicles = async () => {
  //   const response = await requestStartWarsVehicles;
  //   response.results.forEach(element => {
  //     console.log(element.title, element.episode_id);
  //   });
  // };

  // const requestStartWarsStarships = async () => {
  //   const response = await requestStartWarsStarships;
  //   response.results.forEach(element => {
  //     console.log(element.title, element.episode_id);
  //   });
  // };

  return (
    <HomePage
      navigation={navigation}
      dataSource={people}
      loading={loading}
      hook={[setFavorites]}
    />
  );
};
