import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  loader: {},
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listContent: {
    width: '82%',
  },
  listText: {
    textAlign: 'center',
  },
  icon: {},
});
