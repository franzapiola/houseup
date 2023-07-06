import { Colors, footerHeight } from '@globalStyles';
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('screen').width * 0.98,
    height: footerHeight,
    marginHorizontal: '1%',
    marginBottom: '1%',
    borderRadius: 10,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: { width: '95%', borderRadius: 8 },
});
