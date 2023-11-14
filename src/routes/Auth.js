import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../pages/Profile";
import News from "../pages/News";
import Warnings from "../pages/Warnings";
import Publish from "../pages/Publish";

import { KeyboardAvoidingView } from "react-native";

import TabBarCustom from "../components/TabBarCustom";


const Tab = createBottomTabNavigator();

const Auth = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#2f4f',
                tabBarStyle:{
                    borderTopWidth: 1,
                    backgroundColor: '#2f4f4f',
                    borderWidth: 1,
                    borderColor: '#2f4f'
                },
            }}
            tabBar={(props)=> <TabBarCustom {...props}/>}
        >
            <Tab.Screen
                name="noticias"
                component={News}
                options={{
                    tabBarIcon:"newspaper"
                }}
            />
            <Tab.Screen 
                name="avisos"
                component={Warnings}
                options={{
                    tabBarIcon:"warning"
                }}
            />
            <Tab.Screen
                name="postar"
                component={Publish}
                options={{
                    tabBarIcon:"add-circle-sharp"
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon:"person-sharp"
                }}
            />
        </Tab.Navigator>
    );
}

export default Auth;