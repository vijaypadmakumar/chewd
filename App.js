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
import HomeScreen from './Screens/HomeScreen';
import Details from "./Screens/SignUpScreens/Details"
import Preferences from './Screens/SignUpScreens/Prefences';
import Options from './Screens/SignUpScreens/Options';
import Option from './Screens/SignUpScreens/Option';
import Loading from './Screens/Loading';

const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer ref={navigationRef} styles={styles.container}>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="SignUpPageOne" component={Details} />
        <Stack.Screen name="SignUpPageTwo" component={Preferences} />
        <Stack.Screen name="SignUpPageThree" component={Options} />
        <Stack.Screen name="Loading" component={Loading} />
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
