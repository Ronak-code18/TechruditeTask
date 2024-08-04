import {ParamListBase, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Routes} from '../constants';
import {Login} from '../modules';
import {Colors, GlobalMetrics} from '../theme';

const AuthStack = createNativeStackNavigator<ParamListBase>();

const AuthNavigation = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      if (GlobalMetrics.isAndroid) {
        StatusBar.setBackgroundColor(Colors.gray);
      }
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <AuthStack.Navigator
        initialRouteName={Routes.login}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          animation: 'fade',
        }}>
        <AuthStack.Screen name={Routes.login} component={Login} />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
});

export default AuthNavigation;
