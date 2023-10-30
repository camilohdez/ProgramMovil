import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from './src/components/Register';
import Login from './src/components/Login';
import ForgotPassword from './src/components/ForgotPassword';

const Stack = createStackNavigator();

function Navigation() {
    return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default Navigation;
