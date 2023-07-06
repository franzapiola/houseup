import { Colors } from '@globalStyles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logoImg: { width: 160, height: 160 },
  buttonsView: {
    justifyContent: 'space-around',
    width: '100%',
    minHeight: 100,
    flexDirection: 'row',
    borderRadius: 12,
    paddingVertical: 6,
  },
});
