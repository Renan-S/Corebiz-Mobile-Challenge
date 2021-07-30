import {StyleSheet, Dimensions} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const loadingStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    width,
    height,
    position: 'absolute',
    backgroundColor: '#10101099',
  },

  loading: {
    backgroundColor: '#10101099',
    height: 80,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: (height - 80) / 2,
    left: (width - 100) / 2,
  },

  loadingTitle: {
    marginTop: 10,
    fontSize: 14,
    color: 'white',
  },
});
