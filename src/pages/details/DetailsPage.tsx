import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {detailStyles} from './DetailsStyles';

export const DetailsPage = ({route}: any) => {
  const {character} = route.params;
  return (
    <Card>
      <Card.Title>{character.name}</Card.Title>
      <Card.Divider />
      <View key={character.name} style={detailStyles.userContainer}>
        <View style={detailStyles.user}>
          <Text style={detailStyles.name}>Height: {character.height}</Text>
          <Text style={detailStyles.name}>Mass: {character.mass}</Text>
          <Text style={detailStyles.name}>
            Hair color: {character.hair_color}
          </Text>
          <Text style={detailStyles.name}>
            Skin color: {character.skin_color}
          </Text>
        </View>
        <View style={detailStyles.user}>
          <Text style={detailStyles.name}>
            Eye color: {character.eye_color}
          </Text>
          <Text style={detailStyles.name}>
            Birth year: {character.birth_year}
          </Text>
          <Text style={detailStyles.name}>Gender: {character.gender}</Text>
        </View>
      </View>
    </Card>
  );
};
