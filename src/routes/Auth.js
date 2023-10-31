import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../pages/Profile";
import News from "../pages/News";
import Warnings from "../pages/Warnings";
import Publish from "../pages/Publish";

const Tab = createBottomTabNavigator();

const Auth = () => {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="noticias" component={News} />
            <Tab.Screen name="avisos" component={Warnings} />
            <Tab.Screen name="postar" component={Publish} />
            <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default Auth;