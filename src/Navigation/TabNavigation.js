import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';

import Dimensions from '../Common/Dimensions';

/**
 * Importing Vector Icons for Tabs
 */
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Importing Tab Screens
 */
import ChatScreen from '../Screens/Tabs/Chats';
import MeetingsScreen from '../Screens/Tabs/Meetings';
import ProfileScreen from '../Screens/Tabs/Profile';
import CallScreen from '../Screens/Tabs/Calls';


const Tabs = createBottomTabNavigator();

function TabNavigation() {
  const {colors} = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == 'Chats') {
            iconName = focused ? 'chat-bubble' : 'chat-bubble-outline';
            return (
              <MaterialIcons
                name={'chat-bubble-outline'}
                color={color}
                size={size + 2}
              />
            );
          } else if (route.name == 'Meetings') {
            iconName = focused ? 'clockcircle' : 'clockcircleo';
            return (
              <AntDesign name={'clockcircleo'} color={color} size={size - 2} />
            );
          } else if (route.name == 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
            return (
              <MaterialCommunityIcons
                name={'account-circle-outline'}
                color={color}
                size={size + 3}
              />
            );
          }
          else if (route.name == 'Calls') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
            return (
              <MaterialIcons
                name={'call'}
                color={color}
                size={size + 3}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabTintColor,
        labelStyle: {fontSize: 10.5, fontFamily: 'Raleway-Bold'},
        style: {
          width: Dimensions.width,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {height: -1, width: 0},
          shadowOpacity: 0.1,
          elevation: 10,
          height: Platform.OS === 'android' ? 58 : 90,
          backgroundColor: colors.secondary,
        },
      }}>
      <Tabs.Screen
        name="Chats"
        component={ChatScreen}
        options={{title: 'CHATS'}}
      />
     
      <Tabs.Screen
        name="Meetings"
        component={MeetingsScreen}
        options={{title: 'MEETINGS'}}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'PROFILE'}}
      />
    </Tabs.Navigator>
  );
}

export default TabNavigation;
