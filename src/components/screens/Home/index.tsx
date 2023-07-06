import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Text } from '@atoms';
import { images } from '@assets';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ImageButton } from '@molecules';
import { StackParamList } from '../../../../App';

type HomeScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  'Home'
>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationType>();
  return (
    <Container>
      <ImageButton
        img={images.aberturas}
        onPress={() => navigation.navigate('Aberturas')}
        label="Aberturas"
      />
      <ImageButton
        img={images.equipamiento}
        onPress={() => navigation.navigate('Equipamiento')}
        label="Equipamiento"
      />
      <ImageButton
        img={images.terminaciones}
        onPress={() => navigation.navigate('Terminaciones')}
        label="Terminaciones"
      />
    </Container>
  );
};

export default Home;
