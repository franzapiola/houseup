import { Colors } from '@globalStyles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  bgColor: {
    backgroundColor: Colors.default,
  },
  contentContainer: {
    paddingTop: 8,
    paddingHorizontal: 20,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
  },
});
