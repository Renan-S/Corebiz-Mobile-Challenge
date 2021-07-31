import {StyleSheet} from 'react-native';

export const detailStyles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    width: '48%',
    borderWidth: 1,
    borderRadius: 5,
  },
  name: {
    textAlign: 'center',
    fontFamily: 'roboto',
    fontSize: 17,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
