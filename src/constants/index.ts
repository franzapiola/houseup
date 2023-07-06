import { images } from '@assets';
import { ProductCategory, ProductCategoryName } from '@types';

export const productCategoryNames: Array<ProductCategoryName> = [
  'Aberturas',
  'Equipamiento',
  'Terminaciones',
];

export const ProductCategoriesMap: {
  [key in ProductCategoryName]: ProductCategory;
} = {
  Aberturas: {
    name: 'Aberturas',
    img: images.aberturas,
    dataUrl:
      'https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas',
  },
  Equipamiento: {
    name: 'Equipamiento',
    img: images.equipamiento,
    dataUrl:
      'https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento',
  },
  Terminaciones: {
    name: 'Terminaciones',
    img: images.terminaciones,
    dataUrl:
      'https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones',
  },
};
