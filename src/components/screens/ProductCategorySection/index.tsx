import React, { useCallback, useState } from 'react';
import { useFocusEffect, useRoute, RouteProp } from '@react-navigation/native';
import { Container, Divider, Text } from '@atoms';

import { StackParamList } from '../../../../App';
import { Image, View } from 'react-native';

import styles from './styles';
import { Colors } from '@globalStyles';

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
        } finally {
          setLoading(false);
        }
      })();
    }, []),
  );

  return (
    <Container loading={loading}>
      <View style={styles.titleRow}>
        <Image source={categoryImg} />
        <Text type="title">{name}</Text>
      </View>
      {data.map(({ name, items }, index) => (
        <View key={index} style={styles.productSubCategory}>
          <Text style={styles.subCategoryName}>{name}</Text>
          <Divider color={Colors.default} />
          {items.map(({ name, img }, index) => (
            <View key={index} style={styles.product}>
              <Text style={styles.productName}>{name}</Text>
              <View style={styles.imgWrapper}>
                <Image source={{ uri: img }} style={styles.img} />
              </View>
            </View>
          ))}
        </View>
      ))}
    </Container>
  );
};

export default ProductCategorySectionScreen;
