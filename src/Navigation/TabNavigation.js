import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

const Tabs = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == 'Chats') {
            iconName = focused ? 'chat-bubble' : 'chat-bubble-outline';
            return (
              <MaterialIcons name={iconName} color={color} size={size + 3} />
            );
          } else if (route.name == 'Meetings') {
            iconName = focused ? 'clockcircle' : 'clockcircleo';
            return <AntDesign name={iconName} color={color} size={size - 1} />;
          } else if (route.name == 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={size + 4}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ee6f57',
        labelStyle: {fontSize: 10, fontFamily: 'Raleway-SemiBold'},
        style: {
          width: Dimensions.width,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {height: -1, width: 0},
          shadowOpacity: 0.1,
          elevation: 10,
          height: 90,
          backgroundColor: '#fff',
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
