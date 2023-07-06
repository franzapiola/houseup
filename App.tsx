import { NavigationContainer } from '@react-navigation/native';
import { Container, Text } from '@atoms';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens';

export type StackParamList = {
  Home: undefined;
  Aberturas: undefined;
  Equipamiento: undefined;
  Terminaciones: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

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
            title: 'Inicio',
          }}
          component={Home}
        />
        <Stack.Screen name="Aberturas" component={Example} />
        <Stack.Screen name="Equipamiento" component={Example} />
        <Stack.Screen name="Terminaciones" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
