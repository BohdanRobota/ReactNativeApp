import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateStackParamList, PublicStackParamList } from '../types/navigator.type';
import Home from '../screens/Home';
import Map from '../screens/Map';
import Urql from '../screens/Urql';
import { Header } from '../components/Header';
import { Screen } from '../enums/navigator.enum';
import { useAuth0 } from 'react-native-auth0';
import Login from '../screens/Login';

const PrivateStack = createNativeStackNavigator<PrivateStackParamList>();
const PublickStack = createNativeStackNavigator<PublicStackParamList>();

const Navigator = () => {
  const { user } = useAuth0();
  const loggedIn = user !== undefined && user !== null;
  return loggedIn ? (
    <NavigationContainer>
      <PrivateStack.Navigator>
        <PrivateStack.Screen
          options={{
            header: () => <Header title={Screen.HOME} />,
            headerBackVisible: false,
          }}
          name={Screen.HOME}
          component={Home}
        />
        <PrivateStack.Screen
          options={{
            header: () => <Header title={Screen.URQL} />,
            headerBackVisible: false,
          }}
          name={Screen.URQL}
          component={Urql}
        />
        <PrivateStack.Screen
          options={{
            header: () => <Header title={Screen.MAP} />,
            headerBackVisible: false,
          }}
          name={Screen.MAP}
          component={Map}
        />
      </PrivateStack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <PublickStack.Navigator>
        <PublickStack.Screen
          name={Screen.LOGIN}
          component={Login}
          options={{
            header: () => null,
            headerBackVisible: false,
          }}
        />
      </PublickStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
