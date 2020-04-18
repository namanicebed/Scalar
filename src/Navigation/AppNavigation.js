import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/**
 * Import Main Screens
 */
import LoginScreen from '../Screens/Auth';
import SplashScreen from '../Screens/SplashScreen';
import Tabs from './TabNavigation';
import NewChat from '../Screens/Supporting/NewChat';
import ChatScreen from '../Screens/Supporting/ChatScreen';

const Stack = createStackNavigator();

function MainStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      headerMode="none"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="NewChat" component={NewChat} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
