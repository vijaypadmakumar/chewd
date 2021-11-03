// libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// local libs
import { navigationRef } from './RootNavigation';

// Screens
import MainScreen from './Screens/MainScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer ref={navigationRef} styles={styles.container}>
      <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
