import {HomePage} from './HomePage';
import React, {useEffect, useState} from 'react';
import {getStarWarsPeople} from '../../services/StarWarsService';
import LoadingUtil from '../../components/loading/LoadingUtil';
import {CharacterResult} from '../../models/StarWarsCharacterModel';

let peopleHooktInit: CharacterResult[];
export const HomeController = ({navigation}: any) => {
  const [people, setPeople] = useState(peopleHooktInit);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    requestStartWarsPeople();
  }, []);

  const requestStartWarsPeople = async (): Promise<void> => {
    try {
      LoadingUtil.showLoading();
      const response = await getStarWarsPeople;
      setPeople(response.results);
    } catch (error) {
      console.error(error);
    } finally {
      LoadingUtil.dismissLoading();
    }
  };

  return (
    <HomePage
      navigation={navigation}
      dataSource={people}
      favHook={[favorites, setFavorites]}
    />
  );
};
