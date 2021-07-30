import {useState} from 'react';

export const useFavorites = (values: any) => {
  const [favorites, setFavorites] = useState({...values});

  const handleValueChanges = (key: string, value: any): void =>
    setFavorites({...favorites, [key]: value});

  return [favorites, handleValueChanges];
};
