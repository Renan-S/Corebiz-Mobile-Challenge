import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {favoriteStyles} from './FavoriteStyles';

export const FavoritePage = ({route}: any) => {
  const {favorites, navigation} = route.params;

  const itemSeparator = () => {
    return <View style={favoriteStyles.separator} />;
  };

  const renderItem = (data: any) => {
    const {item} = data;
    return (
      <View style={favoriteStyles.listContainer}>
        <TouchableOpacity
          style={favoriteStyles.listContent}
          onPress={() => {
            navigation.navigate('Details', {character: item});
          }}>
          <Text style={favoriteStyles.listText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={favoriteStyles.parentContainer}>
      <FlatList
        data={favorites}
        ItemSeparatorComponent={itemSeparator}
        renderItem={item => renderItem(item)}
        keyExtractor={(_, index) => `key_${index}`}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
};
