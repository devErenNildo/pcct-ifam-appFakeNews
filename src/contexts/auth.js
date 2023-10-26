import React, { createContext, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ token, setToken ] = useState('');
    const navigation = useNavigation();


    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await api.post('/auth', {
                email: email,
                password: password
            });

            const { name, username, turma, _id } = response.data.user;
            const { token } = response.data;
            setUser({
                name,
                username,
                turma,
                _id,
            }); 
            api.defaults.headers['Authorization'] = `Bearer ${token}`
            setLoading(false);
            navigation.navigate('Home');
        } catch (e) {
            setLoading(false);
            Alert.alert('Email ou senha incorretos', 'Verifique se seu email ou sua senha estão corretos');
        }
    }

    const cadastrar = async (name, username, email, password, turma) => {
        setLoading(true);
        try {
            const response = await api.post('/user', {
                "name": name,
                "username": username,
                "email": email,
                "password": password,
                "turma": turma
            });
            setLoading(false);
            navigation.goBack();
        } catch (error) {
            console.log('erro ao cadastrar');
            setLoading(false);
        }
    }


    return(
        <AuthContext.Provider value={{ login, user, cadastrar, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;