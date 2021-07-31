import React from 'react';
import {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {CharacterResult} from '../../models/StarWarsCharacterModel';
import {homeStyles} from '../home/HomeStyles';
import {favoriteStyles} from './FavoriteStyles';

export const FavoritePage = ({route}: any) => {
  const {favHook, navigation} = route.params;
  const [favorites, setFavorites] = favHook;
  const [localFavs, setLocalFavs] = useState(favorites);

  const itemSeparator = () => {
    return <View style={homeStyles.separator} />;
  };

  const renderItem = (character: CharacterResult) => {
    return (
      <View style={homeStyles.listContainer}>
        <TouchableOpacity
          style={homeStyles.listContent}
          onPress={() => {
            navigation.navigate('Details', {character});
          }}>
          <Text style={homeStyles.listText}>{character.name}</Text>
        </TouchableOpacity>
        <Icon
          raised
          name="delete"
          onPress={() => {
            setLocalFavs(
              localFavs.filter(
                (element: CharacterResult) => element !== character,
              ),
            );
            setFavorites(
              favorites.filter(
                (element: CharacterResult) => element !== character,
              ),
            );
          }}
          containerStyle={homeStyles.icon}
        />
      </View>
    );
  };

  return localFavs.length ? (
    <View style={homeStyles.parentContainer}>
      <FlatList
        data={localFavs}
        ItemSeparatorComponent={itemSeparator}
        renderItem={data => renderItem(data.item)}
        keyExtractor={(_, index) => `key_${index}`}
        contentContainerStyle={homeStyles.flatList}
      />
    </View>
  ) : (
    <View style={favoriteStyles.imgContainter}>
      <Text style={homeStyles.listText}>
        These aren't the Favorites you're looking for...
      </Text>
      <Image
        style={favoriteStyles.image}
        source={require('../../assets/anakin-cries.jpg')}
      />
    </View>
  );
};
