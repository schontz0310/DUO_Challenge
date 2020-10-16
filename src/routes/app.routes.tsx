import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import TabRoutes from './tab.routes';

import Details from '../pages/Detail';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="BottomTab">
      <App.Screen
        name="BottomTab"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <App.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={24}
              color="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 24,
          },
          headerRightContainerStyle: {
            marginRight: 24,
          },
          headerTitle: 'Noticia',
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Roboto-Medium',
            fontSize: 18,
          },
          headerStyle: {
            height: 80,

            backgroundColor: '#8900ff',
            elevation: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
        })}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
