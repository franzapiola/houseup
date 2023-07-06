import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Text } from '@atoms';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ImageButton } from '@molecules';
import { StackParamList } from '../../../../App';
import { ProductCategoriesMap, productCategoryNames } from '@constants';

import styles from './styles';
import { View } from 'react-native';

type HomeScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  'Home'
>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationType>();
  return (
    <Container
      scrollViewProps={{
        contentContainerStyle: styles.container,
      }}>
      <Text type="title">HouseUp</Text>
      <View>
        <Text>Buscar productos...</Text>
        {productCategoryNames.map((name, index) => (
          <ImageButton
            key={index}
            onPress={() =>
              navigation.navigate('Category', {
                data: ProductCategoriesMap[name],
              })
            }
            img={ProductCategoriesMap[name].img}
            label={name}
          />
        ))}
      </View>
    </Container>
  );
};

export default Home;
