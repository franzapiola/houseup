import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, ProductCategorySectionScreen } from '@screens';
import { ProductCategory } from '@types';

export type StackParamList = {
  Home: undefined;
  Category: {
    data: ProductCategory;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

const Navigation = () => {
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

        <Stack.Screen
          name="Category"
          options={{
            title: 'Buscar productos',
          }}
          component={ProductCategorySectionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
