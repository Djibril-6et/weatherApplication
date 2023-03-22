import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home';
import CityDetails from './src/pages/Details';
import Favorites from './src/pages/Favorites';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#abaed3' }}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CityDetails" component={CityDetails} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
