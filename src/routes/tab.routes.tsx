/* eslint-disable react/prop-types */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import Favorites from '../pages/Favorites';
import Orders from '../pages/Orders';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: '#000',
      activeBackgroundColor: '#fff',
      inactiveBackgroundColor: '#8900ff',
      labelStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        fontWeight: '600',
      },
      inactiveTintColor: '#fff',
    }}
  >
    <Tab.Screen
      options={{
        title: 'Noticias',
      }}
      name="DashboardStack"
      component={Dashboard}
    />
    <Tab.Screen
      name="Orders"
      options={{
        title: 'Pedidos',
      }}
      component={Orders}
    />

    <Tab.Screen
      name="Favorites"
      options={{
        title: 'Favoritos',
      }}
      component={Favorites}
    />
  </Tab.Navigator>
);

export default TabRoutes;
