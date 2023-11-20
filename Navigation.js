import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import Register from './src/components/Register';
import Login from './src/components/Login';
import ForgotPassword from './src/components/ForgotPassword';
import ProductList from './src/components/ProductList';
import ProductDetail from './src/components/ProductDetail';
import Dashboard from './src/components/Dashboard';
import AgregarProducto from './src/components/AgregarProducto';
import CrearLista from './src/components/CrearLista'

const Stack = createStackNavigator();

function Navigation() {
    return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="ProductList" component={ProductList} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="AgregarProducto" component={AgregarProducto} />
    <Stack.Screen name="CrearLista" component={CrearLista} />
    </Stack.Navigator>
  );
}

export default Navigation;
