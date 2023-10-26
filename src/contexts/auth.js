import React, { createContext, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [ loading, setLoading ] = useState(false);
    const [ token, setToken ] = useState('');
    const navigation = useNavigation();


    const login = async (email, password) => {
        try {
            const url = `${BaseURL}/auth`;
            const data = {
                email: email,
                password: password
            }
            const response = await axios.post(url, data);
            setToken(response.data.token);
            console.log(token);
        } catch (e) {
            Alert.alert('Email ou senha incorretos', 'Verifique se seu email ou sua senha estão corretos');
        }
    }

    const cadastrar = async (name, username, email, password, turma) => {
        try {
            const response = await api.post('/user', {
                "name": name,
                "username": username,
                "email": email,
                "password": password,
                "turma": turma
            });
            
            navigation.goBack();
        } catch (error) {
            console.log('erro ao cadastrar');
        }
    }

    const user = async () => {
        const url = `${BaseURL}/user/id`;
        const customHeader = {
            'Authorization': `Bearer ${token}`
        };
        // const config = {
        //     Headers:{
        //         'Authorization': `Bearer ${token}`,
        //     }
        // };
        const response = await axios.get(url, {
            headers: customHeader
        });
        console.log(response.data);
    }

    return(
        <AuthContext.Provider value={{ login, user, cadastrar }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;