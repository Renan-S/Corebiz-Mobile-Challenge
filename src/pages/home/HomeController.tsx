import {HomePage} from './HomePage';
import React, {useEffect, useState} from 'react';
import {getStarWarsPeople} from '../../services/StarWarsService';

export const HomeController = ({navigation}: any) => {
  const [people, setPeople] = useState([{}]);
  const [favorites, setFavorites] = useState([{}]);

  useEffect(() => {
    requestStartWarsPeople();
  }, []);

  const requestStartWarsPeople = async () => {
    const response = await getStarWarsPeople;
    setPeople(response.results);
  };

  return (
    <HomePage
      navigation={navigation}
      dataSource={people}
      favHook={[favorites, setFavorites]}
    />
  );
};
