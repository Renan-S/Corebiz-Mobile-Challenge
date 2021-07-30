import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Button} from 'react-native';
import {homeStyles} from './HomeStyles';
import {Icon} from 'react-native-elements';

export const HomePage = (props: HomeProps) => {
  const {navigation, dataSource, favHook} = props;
  const [favorites, setFavorites] = favHook;

  const itemSeparator = () => {
    return <View style={homeStyles.separator} />;
  };

  const renderItem = (data: any) => {
    const {item} = data;
    const isFavorite = !favorites.some(
      (alreadyFavorite: any) => alreadyFavorite.name === item.name,
    );
    return (
      <View style={homeStyles.listContainer}>
        <TouchableOpacity
          style={homeStyles.listContent}
          onPress={() => {
            navigation.navigate('Details', {character: item});
          }}>
          <Text style={homeStyles.listText}>{item.name}</Text>
        </TouchableOpacity>
        <Icon
          raised
          name="favorite"
          onPress={() => {
            isFavorite && setFavorites([...favorites, item]);
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
        renderItem={item => renderItem(item)}
        keyExtractor={(_, index) => `key_${index}`}
        contentContainerStyle={homeStyles.flatList}
      />
      <Button
        disabled={favorites.length <= 1}
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
  dataSource: any;
  favHook: any;
};
