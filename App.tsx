import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Container, Text} from '@atoms';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableHighlight} from 'react-native';

const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableHighlight onPress={() => navigation.navigate('Aberturas')}>
        <Text type="title">HouseUp</Text>
      </TouchableHighlight>
    </Container>
  );
};

const Example = () => (
  <Container>
    <Text type="title">Example...</Text>
  </Container>
);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'HouseUp',
          }}
          component={Home}
        />
        <Stack.Screen name="Aberturas" component={Example} />
        <Stack.Screen name="Equipamientos" component={Example} />
        <Stack.Screen name="Terminaciones" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
