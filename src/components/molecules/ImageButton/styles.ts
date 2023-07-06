import { Colors } from '@globalStyles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
    backgroundColor: Colors.light,
    borderRadius: 8,
    padding: 2,
  },
  img: {
    width: 40,
    height: 40,
  },
  label: {
    fontSize: 12,
  },
});
