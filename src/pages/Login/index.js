import React, {useState, useContext} from "react";
import { View, Text, Image, TouchableOpacity, Keyboard, Pressable, ActivityIndicator } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";

// import AuthProvider from "../../contexts/auth.js";
import { AuthContext } from "../../contexts/auth"



const Login = ({navigation}) =>{

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const reset = () => {
        setEmail('');
        setPassword('');
    }

    const { login, loading } = useContext(AuthContext);

    return(
        <Pressable style={styles.container} onPress={()=> Keyboard.dismiss()}>
            {/* inicio logo superior */}
            <View style={styles.boxLogo}>
                <Image
                    source={require("../../assets/logo_if.png")}
                    style={styles.logo}
                />
            </View>
            {/* fim logo superior */}

            {/* inico texto de boas vindas indicando a tela de login */}
            <View style={styles.boxText01}>
                <Text style={styles.text01}>
                    Bem Vindo
                </Text>
            </View>
            {/* fim texto de boas vindas indicando a tela de login */}

            {/* inicio inputs de Login */}
            <View style={styles.containerInputs}>
                {/* inicio input de e-mail */}
                <Input placeholder={'email'} value={email} setValue={setEmail}/>
                {/* fim input de e-mail */}

                {/* Input de senha */}
                <InputPassword placeholder={'senha'} value={password} setValue={setPassword}/>
                {/* fim inputs de Login */}
            </View>

            {/* Botão de Login */}
            <TouchableOpacity
                onPress={()=> {login(email, password); reset()}}
                // onPress={()=> console.log(email, password)}
                style={styles.containerBtLogin}
            >
                <View style={styles.boxBtLogin}>
                    {
                        loading 
                        ? <ActivityIndicator size={20} color={'#2F9E41'} />
                        : <Text style={styles.textBtLogin}>Login</Text>
                    }

                </View>
            </TouchableOpacity>

            {/* Direcionamento para se cadastrar*/}
            <View style={styles.containerRegister}>
                <Text style={styles.textRegister}>
                    Não tem uma conta? 
                </Text>
                <TouchableOpacity
                    style={styles.boxRegister}
                    onPress={()=> navigation.navigate('Register')}
                >
                    <Text style={[styles.textRegister, {color: 'red'}]}>
                        Registre-se aqui.
                    </Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
}

export default Login;
