import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import { useFonts } from 'expo-font';
import SignUp from './src/screens/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from "./Navigations";
import { NavigationContainer } from '@react-navigation/native';
import ForgetPass from './src/screens/ForgetPass';
import NewPass from './src/screens/NewPass';
import PasswordChanged from './src/screens/PasswordChanged';
import Home from './src/screens/Home';
import EnableBT from './src/screens/EnableBT';
import TurnedOn from './src/screens/TurnedOn';
import Notifications from './src/screens/Notifications';
import HomeAftBTC from './src/screens/HomeAftBTC';



const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="NewPass" component={NewPass} />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
    </Stack.Navigator>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EnableBT" component={EnableBT} />
      <Stack.Screen name="TurnedOn" component={TurnedOn} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="HomeAftBTC" component={HomeAftBTC} />
    </Stack.Navigator>
  )
}

export default function App() {

  const [loaded] = useFonts({
    LBl: require("./assets/fonts/Lato/Lato-Black.ttf"),
    LBI: require("./assets/fonts/Lato/Lato-BlackItalic.ttf"),
    LBo: require("./assets/fonts/Lato/Lato-Bold.ttf"),
    LI: require("./assets/fonts/Lato/Lato-Italic.ttf"),
    LL: require("./assets/fonts/Lato/Lato-Light.ttf"),
    LLi: require("./assets/fonts/Lato/Lato-LightItalic.ttf"),
    LR: require('./assets/fonts/Lato/Lato-Regular.ttf'),
    LT: require("./assets/fonts/Lato/Lato-Thin.ttf"),
    LTI: require("./assets/fonts/Lato/Lato-ThinItalic.ttf"),

    CSB: require('./assets/fonts/Circular_std/CircularStd-Book.ttf'),
    CSM: require('./assets/fonts/Circular_std/CircularStd-Medium.ttf'),


  })

  if (!loaded) { return null }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}