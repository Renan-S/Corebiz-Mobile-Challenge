import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Button} from 'react-native';
import {homeStyles} from './HomeStyles';
import {Icon} from 'react-native-elements';
import {CharacterResult} from '../../models/StarWarsCharacterModel';

export const HomePage = (props: HomeProps) => {
  const {navigation, dataSource, favHook} = props;
  const [favorites, setFavorites] = favHook;

  const itemSeparator = () => {
    return <View style={homeStyles.separator} />;
  };

  const renderItem = (character: CharacterResult) => {
    const {name} = character;
    const isFavorite = !favorites.some(
      (alreadyFavorite: any) => alreadyFavorite.name === name,
    );
    return (
      <View style={homeStyles.listContainer}>
        <TouchableOpacity
          style={homeStyles.listContent}
          onPress={() => {
            navigation.navigate('Details', {character});
          }}>
          <Text style={homeStyles.listText}>{name}</Text>
        </TouchableOpacity>
        <Icon
          raised
          name="favorite"
          onPress={() => {
            isFavorite && setFavorites([...favorites, character]);
          }}
          color={isFavorite ? 'gray' : 'red'}
          containerStyle={homeStyles.icon}
        />
      </View>
    );
  };

  return (
    <View style={homeStyles.parentContainer}>
      <FlatList
        data={dataSource}
        ItemSeparatorComponent={itemSeparator}
        renderItem={data => renderItem(data.item)}
        keyExtractor={(_, index) => `key_${index}`}
        contentContainerStyle={homeStyles.flatList}
      />
      <Button
        title="Go to favorites"
        onPress={() => {
          navigation.navigate('Favorites', {favorites, navigation});
        }}
      />
    </View>
  );
};

type HomeProps = {
  navigation: any;
  dataSource: CharacterResult[];
  favHook: any;
};
