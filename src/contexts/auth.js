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
    const [ news, setNews ] = useState([]);
    const [ warnings, setWarnings ] = useState([]);
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
                email: email
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

    const viewNews =  async () => {
        setLoading(true);
        try {
            const response = await api.get('/post');
            setLoading(false)
            if (JSON.stringify(response.data) !== JSON.stringify(news)) {
                setNews(response.data);
            }
            // setNews(response.data);
            // console.log(news);
        } catch (error) {
            Alert.alert('Erro ao carregar notícias');
        }
    }


    const viewWarning = async () => {
        setLoading(true);
        try {
            const response = await api.get('/aviso');
            setLoading(false);
            if (JSON.stringify(response.data) !== JSON.stringify(warnings)) {
                setWarnings(response.data);
            }
        } catch (error) {
            Alert.alert('Erro ao carregar os avisos');
        }
    }

    const createPost = async ( title, banner, text ) => {
        setLoading(true);
        try {
            const response = await api.post('/post/create', {
                title,
                banner,
                text,
                user: user._id
            });
            setLoading(false);
        } catch (error) {
            Alert.alert('Erro ao fazer publicação');
        }
    }


    return(
        <AuthContext.Provider value={{ login, user, cadastrar, loading, viewNews, news, viewWarning, warnings, createPost }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;