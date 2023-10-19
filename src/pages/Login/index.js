import React, {useState} from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Keyboard, Pressable, Alert } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";



const Login = ({navigation}) =>{

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ userLogged, setUserLogged ] = useState('');

    const [ loading, setLoading ] = useState(false);



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
                onPress={()=> console.log(email)}
                style={styles.containerBtLogin}
            >
                <View style={styles.boxBtLogin}>
                    <Text style={styles.textBtLogin}>
                        Login
                    </Text>
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
