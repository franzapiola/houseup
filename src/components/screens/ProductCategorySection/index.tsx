import React, { useCallback, useState } from 'react';
import { Image, View } from 'react-native';
import { useFocusEffect, useRoute, RouteProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { Container, Divider, Text } from '@atoms';
import { Colors } from '@globalStyles';
import { Footer, ImageItemWithViewer } from '@organisms';
import { Product } from '@types';
import { StackParamList } from '@navigation';

import styles from './styles';

type ProductCategorySectionScreenRouteType = RouteProp<
  StackParamList,
  'Category'
>;

const ProductCategorySectionScreen = ({}) => {
  const {
    params: {
      data: { name, dataUrl, img: categoryImg },
    },
  } = useRoute<ProductCategorySectionScreenRouteType>();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const result = await fetch(dataUrl);
          const data = await result.json();
          setData(data);
        } catch (error) {
          console.error(error);
          Toast.show({
            type: 'error',
            text1: 'Hubo un error al mostrar los productos.',
          });
        } finally {
          setLoading(false);
        }
      })();
    }, []),
  );

  return (
    <>
      <Container
        loading={loading}
        scrollViewProps={{ contentContainerStyle: styles.contentContainer }}>
        <View style={styles.titleRow}>
          <Image source={categoryImg} />
          <Text type="title">{name}</Text>
        </View>
        {data.map(({ name, items }, index) => (
          <View key={index} style={styles.productSubCategory}>
            <Text style={styles.subCategoryName}>{name}</Text>
            <Divider color={Colors.default} />
            {(items as [Product]).map(({ name, img }, index) => (
              <ImageItemWithViewer key={index} imgUrl={img} label={name} />
            ))}
          </View>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default ProductCategorySectionScreen;
