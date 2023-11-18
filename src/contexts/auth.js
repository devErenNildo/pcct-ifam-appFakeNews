import React, { createContext, useState } from "react";
import { Alert, PermissionsAndroid } from "react-native";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    // INFORMAÇÕES DO USUÁRIO ENQUANTO FICAR LOGADO
    const [ user, setUser ] = useState(null);

    // SEM UTILIDADE
    const [ avatarImage, setAvatarImage ] = useState('');

    // imagem selecionada para fazer o cadastro
    const [ avatarCadastro, setAvatarCadastro ] = useState('');

    const [ loading, setLoading ] = useState(false);


    const [ token, setToken ] = useState('');

    // NOTICIAS 
    const [ news, setNews ] = useState([]);

    const [ warnings, setWarnings ] = useState([]);

    // IMAGEM DE PREVISUALIZAÇÃO DO POST
    const [ postImage, setPostImage ] = useState(null);

// DADOS DO USUÁRIO QUE FEZ LOGIN
    const [ userComment, setUserComment ] = useState('');


    const navigation = useNavigation();


    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await api.post('/auth', {
                email: email,
                password: password
            });

            const { name, username, turma, _id, avatarSrc, servidor } = response.data.user;
            const { token } = response.data;
            setToken(token);
            setUser({
                name,
                username,
                turma,
                _id,
                email: email,
                avatarSrc,
                servidor
            }); 
            api.defaults.headers['Authorization'] = `Bearer ${token}`
            setLoading(false);
            navigation.navigate('Home');
        } catch (e) {
            setLoading(false);
            Alert.alert('Email ou senha incorretos', 'Verifique se seu email ou sua senha estão corretos');
        }
    }

    // OPÇÕES PARA AS FOTOS !
    const options = {
        mediaType: 'photo'
    }  

    // SELECIONA UMA IMAGEM PARA VISUALIZAÇÃO ANTES DE SE CADASTRAR
    const selectImageAvatarCadastro = async () => {
        Alert.alert("Selecione", "De onde você quer pegar a foto", [
            {
                text: "Galeria",
                onPress: () => galeria(),
                style: "default"
            },
            {
                text: "Câmera",
                onPress: () => camera(),
                style: "default"
            }
        ]);

        const galeria = () => {
            launchImageLibrary(options, (response)=> {
                if (response.didCancel) {
                    null
                } else if (response.error) {
                    console.log('Ocorreu um erro ao capturar imagem da câmera:', response.error);
                } else {
                    // Imagem capturada nessa etapa, está em forma de objeto, uri, type, name
                    const image = response.assets[0];
                    // console.log(image);
                    setAvatarCadastro(image)
    
                }
            });
        }
        const camera = () => {
            launchCamera(options, (response) => {
                if (response.didCancel) {
                    console.log('A captura de imagem da câmera foi cancelada.');
                } else if (response.error) {
                    console.log('Ocorreu um erro ao capturar imagem da câmera:', response.error);
                } else {
                    const image = response.assets[0];
                    // console.log(image);
                    setAvatarCadastro(image);
    
                }
            });  
        }  
    }

    // CADASTRA O USUÁRIO
    const cadastrar = async (name, username, email, password, turma) => {
        setLoading(true);
        try {

            // console.log(avatarCadastro);
            const data = new FormData();

            data.append('name', name);
            data.append('username', username);
            data.append('email', email);
            data.append('password', password);
            data.append('turma', turma);
            data.append('file', {
                uri: avatarCadastro.uri,
                name: avatarCadastro.fileName,
                type: avatarCadastro.type
            });
            data.append('servidor', false);

            const response = await api.post('/user', data);

            setAvatarCadastro('');
            setLoading(false);
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Aconteceu um erro inesperado ao se cadastrar');
            console.log(error);
            setLoading(false);
        }
    }


    // PEGA TODAS AS PUBLICAÇÕES E ADICIONA NA VARIÁVEL "NEWS"
    const viewNews =  async () => {
        setLoading(true);
        try {
            const response = await api.get('/post');
            setLoading(false)
            if (JSON.stringify(response.data) !== JSON.stringify(news)) {
                setNews(response.data);
            }

            setLoading(false);
        } catch (error) {
            Alert.alert('Erro ao carregar notícias');
            console.log(error);
        }
    }

// VISUALIZA TODOS OS AVISOS
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

    // SELECIONA A IMAGEM DE UM POST PARA UMA PREVISUALIZAÇÃO
    const selectImagecreatePost = async () => {
        Alert.alert("Selecione", "De onde você quer pegar a foto", [
            {
                text: "Galeria",
                onPress: () => galeria(),
                style: "default"
            },
            {
                text: "Câmera",
                onPress: () => camera(),
                style: "default"
            }
        ]); 

        const galeria = () => {
            launchImageLibrary(options, (response)=> {
                if (response.didCancel) {
                    null
                } else if (response.error) {
                    console.log('Ocorreu um erro ao capturar imagem da câmera:', response.error);
                } else {
                    const image = response.assets[0];
                    // console.log(image);
                    setPostImage(image);
    
                }
            });
        }
        const camera = () => {
            launchCamera(options, (response) => {
                if (response.didCancel) {
                    console.log('A captura de imagem da câmera foi cancelada.');
                } else if (response.error) {
                    console.log('Ocorreu um erro ao capturar imagem da câmera:', response.error);
                } else {
                    const image = response.assets[0];
                    // console.log(image);
                    setPostImage(image);
    
                }
            });  
        }  
    }

    // PUBLICA O POST
    const publishPost = async (title, text) => {
        setLoading(true);
        try {
            const data = new FormData();
            data.append('file', {
                uri: postImage.uri,
                name: postImage.fileName,
                type: postImage.type
            });

            data.append('user', user._id);
            data.append('title', title);
            data.append('text', text);
            setLoading(false);
            
            const response = await api.post('/post/create', data);

            resetImage();
            viewNews();
            Alert.alert('Tudo certo', 'Publicação realizada com sucesso');
        } catch (error) {
            Alert.alert("Erro", "Aconteceu um erro inesperado ao realizar sua publicação, erro !!!");
            setLoading(false);
        }
    }


    const publicarAviso = async (title, text, turma) => {
        try {
            setLoading(true);
            const response = api.post('/aviso/create', {
                title, 
                text,
                turma,
                user: user._id
            });   
            setLoading(false);
            viewWarning()
        } catch (error) {
            Alert.alert('Erro', 'Aconteceu um erro inesperado ao criar seu aviso')
            setLoading(false);
        }
    }


    const resetImage = () => {
        setPostImage(null);
    }

    // FAZER COMENTÁRIO EM UM POST
    const commentAndPost = async (idPost, msg) => {
        try {

            const response = await api.patch(`/post/comment/${idPost}`, {
                userId: user._id,
                comment: msg,
                username: user.username,
                src: user.avatarSrc
            });
            viewNews();
            
        } catch (error) {
            Alert.alert('Erro', 'Aconteceu um erro ao fazer seu comentário, tente novamente mais tarde');
        }
    }

    // DAR LIKE EM UM POST
    const likedAndPost = async (idPost) => {
        try {
            const response = await api.patch(`/post/like/${idPost}`, {
                userId: user._id
            });
            viewNews();
            console.log(response.data);
        } catch (error) {
            Alert.alert("Erro", 'ocorreu um erro inesperado ao curtir a publicação');
        }
    }

    // SAI DA CONTA E VAI PARA A TELA DE INICIO
    const logOff = () => {
        setUser(null);
        setAvatarImage('');
        setAvatarCadastro('');
        setPostImage(null);
        navigation.navigate('Login');
    }
    
    // BUSCAR USER POR ID E SETA NA VARIÁVEL "USERCOMMENT"
    const buscarUserId = async (id) => {

        const response = await api.get(`/user/${id}`);
        if (JSON.stringify(response.data) !== JSON.stringify(userComment)) {
            setUserComment(response.data)
        }

    }


    return(
        <AuthContext.Provider value={{
            // FAZ LOGIN NO SISTEMA 
            login,

            // INFORMAÇÕES DO USUÁRIO LOGADO
            user,

            // CADASTRA NOVOS USUÁRIOS
            cadastrar,

            // VARIÁVEL DE ESTADO DE CARREGANDO...
            loading,

            // PEGAS AS NOTÍCIAS E ADICIONA NA VARIÁVEL "NEWS"
            viewNews,

            // CONTÉM TODAS AS NOTÍCIAS
            news,

            // PEGA OS AVISOS E SETA EM "WARNINGS"
            viewWarning,

            // CONTÉM OS AVISOS
            warnings,

            // FAZ UM COMENTÁRIO
            commentAndPost,

            // DAR LIKE EM UMA PUBLICAÇÃO
            likedAndPost,

            // DIRECIONA PARA A TELA DE LOGIN
            logOff,

            // busca um usuário pelo id 
            buscarUserId,

            // usuário buscado pelo id, será usado para exibir quem fez um comentário
            userComment,

            // SELEÇÃO DE UMA IMAGEM PARA FAZER UM POST 
            postImage,

            publicarAviso,

            selectImagecreatePost,
            avatarImage,
            resetImage,
            publishPost,

            // fazer preView da foto para cadastro
            avatarCadastro,
            selectImageAvatarCadastro,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;