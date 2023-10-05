import React, {useState} from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Keyboard, Pressable } from "react-native";
// import { Entypo } from '@expo/vector-icons';
import styles from "./styles";



const Login = ({navigation}) =>{

    // controle das cores dos inputs quando estão em foco
    const [ input01, setInput01 ] = useState(false);
    const [ input02, setInput02 ] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [ name, setName ] = useState('');
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
                <View style={[styles.boxInput, {
                    backgroundColor: input01 ? '#2F9E41' : '#fff'
                }]}>
                    <TextInput
                        style={styles.input}
                        onFocus={()=> setInput01(true)}
                        onBlur={()=> setInput01(false)}
                        placeholder="email"
                        placeholderTextColor="#808080"
                        onChangeText={setName}
                    />
                </View>
                {/* fim input de e-mail */}

                {/* Input de senha */}
                <View style={[styles.boxInput, {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: input02 ? '#2F9E41' : '#fff'
                }]}>
                    <TextInput
                        style={[styles.input, {
                            flex: 1
                        }]}
                        onFocus={()=> setInput02(true)}
                        onBlur={()=> setInput02(false)}
                        placeholder="senha"
                        placeholderTextColor="#808080"
                        secureTextEntry={!passwordVisible}
                        onChangeText={setPassword}
                    />

                    {/* Botão de visibilidade de senha */}
                    <TouchableOpacity
                        style={styles.boxEye}
                        onPress={()=> setPasswordVisible(!passwordVisible)}
                    >
                        {
                            passwordVisible
                            ?
                                <Image
                                    style={styles.eyePassword}
                                    source={ input02 ? require('../../assets/closedEyeGreen.png') : require('../../assets/closedEye.png')}
                                    
                                />
                            :
                                <Image
                                    style={styles.eyePassword}
                                    source={ input02 ? require('../../assets/eyeGreen.png') : require('../../assets/eye.png')}
                                />  
                        }
                    </TouchableOpacity>
                </View>
            </View>
            {/* fim inputs de Login */}

            {/* Botão de Login */}
            <TouchableOpacity
                // onPress={authUser}
                // onPress={()=> alert(config.API)}
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
                    // onPress={()=> navigation.navigate('register')}
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
