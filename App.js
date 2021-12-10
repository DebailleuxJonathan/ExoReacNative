import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './router/AppNavigator';

const Flex = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Flex;
