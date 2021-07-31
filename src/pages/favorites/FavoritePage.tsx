import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import {homeStyles} from '../home/HomeStyles';
import {favoriteStyles} from './FavoriteStyles';

export const FavoritePage = ({route}: any) => {
  const {favorites, navigation} = route.params;

  const itemSeparator = () => {
    return <View style={homeStyles.separator} />;
  };

  const renderItem = (data: any) => {
    const {item} = data;
    return (
      <View style={homeStyles.listContainer}>
        <TouchableOpacity
          style={favoriteStyles.listContent}
          onPress={() => {
            navigation.navigate('Details', {character: item});
          }}>
          <Text style={homeStyles.listText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return favorites.length ? (
    <View style={homeStyles.parentContainer}>
      <FlatList
        data={favorites}
        ItemSeparatorComponent={itemSeparator}
        renderItem={item => renderItem(item)}
        keyExtractor={(_, index) => `key_${index}`}
        contentContainerStyle={homeStyles.flatList}
      />
    </View>
  ) : (
    <View style={favoriteStyles.imgContainter}>
      <Text style={homeStyles.listText}>
        Those are not the Favorites you're looking for
      </Text>
      <Image
        style={favoriteStyles.image}
        source={require('../../assets/anakin-cries.jpg')}
      />
    </View>
  );
};
