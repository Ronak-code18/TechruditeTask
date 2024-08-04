import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {CustomTab} from '../components';
import {Routes} from '../constants';
import {Events, Favorites, Profile, Search} from '../modules';
import {Colors, GlobalMetrics} from '../theme';

const BottomTab = createBottomTabNavigator<ParamListBase>();

const TabNavigation = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      if (GlobalMetrics.isAndroid) {
        StatusBar.setBackgroundColor(Colors.white);
      }
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <BottomTab.Navigator
        tabBar={() => <CustomTab />}
        initialRouteName={Routes.events}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}>
        <BottomTab.Screen name={Routes.search} component={Search} />
        <BottomTab.Screen name={Routes.events} component={Events} />
        <BottomTab.Screen name={Routes.favorites} component={Favorites} />
        <BottomTab.Screen name={Routes.profile} component={Profile} />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default TabNavigation;
