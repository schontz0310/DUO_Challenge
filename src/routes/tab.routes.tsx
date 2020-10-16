/* eslint-disable react/prop-types */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import News from '../pages/News';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: '#000',
      activeBackgroundColor: '#fff',
      inactiveBackgroundColor: '#8900ff',
      labelStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        alignSelf: 'center',
      },
      adaptive: true,
      inactiveTintColor: '#fff',
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Icon size={20} name="home" color={color} />,
        title: 'Home',
      }}
      name="DashboardStack"
      component={Dashboard}
    />
    <Tab.Screen
      name="News"
      options={{
        tabBarIcon: ({ color }) => <Icon size={20} name="edit" color={color} />,
        title: 'News',
      }}
      component={News}
    />

    <Tab.Screen
      name="Register"
      options={{
        tabBarIcon: ({ color }) => <Icon size={20} name="mail" color={color} />,
        title: 'Register',
      }}
      component={Register}
    />
  </Tab.Navigator>
);

export default TabRoutes;
