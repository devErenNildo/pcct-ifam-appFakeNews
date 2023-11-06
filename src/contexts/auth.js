import React, { createContext, useState } from "react";
import { Alert, PermissionsAndroid } from "react-native";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);
    const [ avatarImage, setAvatarImage ] = useState('');
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

            const { name, username, turma, _id, avatar, background } = response.data.user;
            const { token } = response.data;
            setToken(token);
            setUser({
                name,
                username,
                turma,
                _id,
                email: email,
                avatar,
                background
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
                "turma": turma,
                "avatar": "notImage",
                "background": "notImage"
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

    const getAvatar = async () => {
        try {
            const response = await api.get('/pictures/avatar');
            // console.log(response.data);
            response.data.forEach((e) => {
                if(e.user === user._id){
                    if (JSON.stringify(e.src.slice(6)) !== JSON.stringify(avatarImage)) {
                        setAvatarImage( e.src.slice(6));
                    }
                }
            });
        } catch (error) {
            Alert.alert("Errro", "Falha ao carregar sua imagem de perfil");
        }
    }

        const createAvatar = async () => {
            Alert.alert("Selecione", "De onde você quer pegar a foto", [
                {
                    text: "Galeria",
                    onPress: () => pickImageFromGalery(),
                    style: "default"
                },
                {
                    text: "Câmera",
                    onPress: () => pickImageFromCamera(),
                    style: "default"
                }
            ]);
        }
    
        const pickImageFromGalery = async () => {
    
            const options = {
                mediaType: 'photo'
            }
    
            const result = await launchImageLibrary(options);
                try {
                    const image = result.assets[0];

                    const data = new FormData();
                    data.append('file', {
                        uri: image.uri,
                        name: image.fileName,
                        type: image.type
                    });
                    data.append('name', 'imageUser');
                    data.append('user', user._id);

                    const headers = {
                        'headers': {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    const response = await api.post('/pictures/avatar', data);
                    console.log(response.data);
                    Alert.alert("Tudo certo", "Imagem atualizada com sucesso");
                } catch (error) {
                    Alert.alert("Erro", "Erro ao carregar a imagem, tente novamente");
                    console.error(error);
                }
    
        }
        const pickImageFromCamera = () => {
    
        }


    return(
        <AuthContext.Provider value={{ login, user, cadastrar, loading, viewNews, news, viewWarning, warnings, createPost, createAvatar, getAvatar, avatarImage }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;