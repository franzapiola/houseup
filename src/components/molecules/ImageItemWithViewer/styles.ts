import { Colors } from '@globalStyles';
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    backgroundColor: Colors.lighter,
    padding: 10,
    paddingLeft: 16,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  label: {
    fontSize: 24,
  },
  imgWrapper: {
    borderRadius: 6,
    overflow: 'hidden',
    borderColor: Colors.default,
    borderWidth: 1,
  },
  img: {
    width: 140,
    height: 140,
  },
  viewerLabel: {
    position: 'absolute',
    top: 0,
    zIndex: 9999,
    color: Colors.light,
    alignSelf: 'center',
  },
  viewerFooterRow: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  viewerOption: {
    backgroundColor: Colors.light,
    borderRadius: 5,
    padding: 4,
  },
  viewerOptionsText: {
    color: Colors.dark,
  },
});
