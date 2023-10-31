import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, FlatList, Button } from "react-native";
// import UsersAndPosters from "../../data";
import { Warning } from "../../components/Warning";
// import config from '../../config';
// import axios from "axios";

import { AuthContext } from "../../contexts/auth";

const Warnings = () => {


    const { viewWarning, warnings } = useContext(AuthContext);

    useEffect(()=> {
        viewWarning();
    }, [warnings]);

    return(
        <ScrollView
            contentContainerStyle={{
                width: '100%',
                backgroundColor: '#2f4f4f'
            }}
            horizontal
            scrollEnabled={false}
        >
            <FlatList
                data={warnings}
                renderItem={({ item, index }) => <Warning item={item}/>}
                keyExtractor={(item, index) => String(index)}
            />
        </ScrollView>
    );
}

export default Warnings;