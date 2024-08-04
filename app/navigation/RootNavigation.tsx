import {ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Routes} from '../constants';
import {useAppSelector} from '../redux';
import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation';

const RootStack = createNativeStackNavigator<ParamListBase>();

const RootNavigation = () => {
  const user = useAppSelector(state => state.root.user);

  return (
    <RootStack.Navigator
      initialRouteName={
        user?.token ? Routes.tabNavigation : Routes.authNavigation
      }
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        animation: 'fade',
      }}>
      <RootStack.Screen
        name={Routes.authNavigation}
        component={AuthNavigation}
      />
      <RootStack.Screen name={Routes.tabNavigation} component={TabNavigation} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
