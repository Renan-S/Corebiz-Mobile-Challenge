import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import {CharacterResult} from '../../models/StarWarsCharacterModel';
import {homeStyles} from '../home/HomeStyles';
import {favoriteStyles} from './FavoriteStyles';

export const FavoritePage = ({route}: any) => {
  const {favorites, navigation} = route.params;

  const itemSeparator = () => {
    return <View style={homeStyles.separator} />;
  };

  const renderItem = (character: CharacterResult) => {
    return (
      <View style={homeStyles.listContainer}>
        <TouchableOpacity
          style={favoriteStyles.listContent}
          onPress={() => {
            navigation.navigate('Details', {character});
          }}>
          <Text style={homeStyles.listText}>{character.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return favorites.length ? (
    <View style={homeStyles.parentContainer}>
      <FlatList
        data={favorites}
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
