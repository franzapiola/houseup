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
  product: {
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
  productName: {
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
});
