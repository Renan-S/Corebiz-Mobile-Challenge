import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {homeStyles} from './HomeStyles';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';

enableScreens();

export const HomePage = (props: HomeProps) => {
  const {navigation, dataSource, loading, hook} = props;
  const [setFavorite] = hook;

  const itemSeparator = () => {
    return <View style={homeStyles.separator} />;
  };

  const renderItem = (data: any) => {
    return (
      <TouchableOpacity
        style={homeStyles.list}
        onPress={() => {
          setFavorite(data.item.name, data);
          navigation.navigate('Details', {character: data.item});
        }}>
        <Text style={homeStyles.lightText}>{data.item.name}</Text>
        <Text style={homeStyles.lightText}>{data.item.eye_color}</Text>
        <Text style={homeStyles.lightText}>{data.item.gender}</Text>
        <Icon raised name="g-translate" onPress={() => console.log('hello')} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={homeStyles.parentContainer}>
      {loading ? (
        <View style={homeStyles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text>Fetching Data</Text>
        </View>
      ) : (
        <FlatList
          data={dataSource}
          ItemSeparatorComponent={itemSeparator}
          renderItem={item => renderItem(item)}
          keyExtractor={(_, index) => `key_${index}`}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />
      )}
      <Button
        title="Go to favorites"
        onPress={() => navigation.navigate('Index')}
      />
      <Button title="Storage" onPress={() => retrieveData()} />
    </View>
  );
};

const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('favorites');
    if (value !== null) {
      // We have data!!
      console.log(JSON.parse(value));
    }
    console.log(value);
  } catch (error) {
    console.error(error);
    // Error retrieving data
  }
};

type HomeProps = {
  navigation: any;
  dataSource: any;
  loading: any;
  hook: any;
};
