import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../pages/Login";
import CreateUser from "../pages/CreateUser";
import Auth from "./Auth";

const Stack = createNativeStackNavigator();

const Home = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={CreateUser} />
            <Stack.Screen name="Home" component={Auth} />
        </Stack.Navigator>
    );
}

export default Home;