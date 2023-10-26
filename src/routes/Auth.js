import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

const Auth = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="profile" component={Profile} />
            <Tab.Screen name="teste" component={Profile} />
        </Tab.Navigator>
    );
}

export default Auth;