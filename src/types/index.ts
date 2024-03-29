import { ImageSourcePropType } from 'react-native';

export type ProductCategoryName =
  | 'Aberturas'
  | 'Equipamiento'
  | 'Terminaciones';

export interface ProductCategory {
  name: ProductCategoryName;
  img: ImageSourcePropType;
  dataUrl: string;
}

export interface Product {
  img: string;
  name: string;
}
