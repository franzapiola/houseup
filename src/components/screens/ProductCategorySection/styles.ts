import { Colors } from '@globalStyles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  subCategoryName: {
    alignSelf: 'flex-start',
    color: Colors.dark,
  },
  productSubCategory: {
    backgroundColor: Colors.light,
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
  },
});
