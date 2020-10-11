import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
        />

        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
        />
      </Navigator>
    </NavigationContainer>
  );
}
