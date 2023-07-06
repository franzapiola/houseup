import { ImageSourcePropType } from 'react-native';
import { images } from '@assets';

export type ProductCategoryName =
  | 'Aberturas'
  | 'Equipamiento'
  | 'Terminaciones';

export interface ProductCategory {
  name: ProductCategoryName;
  img: ImageSourcePropType;
  dataUrl: string;
}
