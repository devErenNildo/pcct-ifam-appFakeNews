import React, { useState, useContext } from "react";
import { View, Text, Image, Modal, Pressable, Keyboard } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { AuthContext } from "../../contexts/auth";

import styles from "./style";

import Btn from "../../components/Btn";
import BackBtn from "../../components/BackBtn";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";


const CreateUser = ({navigation}) => {

    const [ modal01, setModal01 ] = useState(false);
    const [ modal02, setModal02 ] = useState(false);
    const [ modal03, setModal03 ] = useState(false);

    const [ name, setName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');

    const [ turma, setTurma ] = useState('');

    const [ password, setPassword ] = useState('');
    const [ checkPassword, setCheckPassword ] = useState('');

    const { cadastrar } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <BackBtn onPress={()=> navigation.goBack()} />
            <Text style={styles.text01}>
                Bem Vindo ao FakeNews...
            </Text>
            <Image
                style={styles.img}
                source={ require('../../assets/fake.jpg')}
            />
            <Text style={styles.text02}>
                Aqui você fica por dentro de tudo que está acontecendo no IFAM, vamos precisar apenas de algumas informações para criar sua conta
            </Text>

            <Btn title={'Começar'} onPress={()=> setModal01(true)} color={'#2F9E41'}/>

            <Modal
                animationType="fade"
                transparent={false}
                visible={modal01}
                backdropColor='#2F4F4F'
            >
                <Pressable style={styles.container} onPress={()=> Keyboard.dismiss()}>
                    <BackBtn onPress={()=> setModal01(false)} />
                    <Text style={styles.text03}>
                        Precisamos de algumas informações
                    </Text>
                    <Input placeholder={'Nome Completo'} value={name} setValue={setName}/>

                    <Input placeholder={'Seu E-mail'} value={email} setValue={setEmail}/>

                    <Input placeholder={'Nome de Usuário'} value={username} setValue={setUsername}/>

                    {
                        (name === '' || username === '' || email === '')
                        ? null
                        : <Btn title={'Proximo'} onPress={()=> setModal02(true)} color={'#2F9E41'}/>
                    }
                </Pressable>
            </Modal>

            <Modal
                animationType="fade"
                transparent={false}
                visible={modal02} 
            >
                <Pressable style={styles.container} onPress={()=> Keyboard.dismiss()}>
                    <BackBtn onPress={()=> setModal02(false)} />
                    <Text style={styles.text03}>
                        Qual a sua turma ?
                    </Text>

                    <View style={styles.boxTurma}>
                    <Picker
                        selectedValue={turma}
                        onValueChange={(item)=> setTurma(item)}
                    >
                        <Picker.Item label="Programação de Jogos" value="jogos"/>
                        <Picker.Item label="Informática" value="info"/>
                        <Picker.Item label="Informática para Internet" value="infoNet"/>
                        <Picker.Item label="Recursos pesqueiros" value="rp"/>
                        <Picker.Item label="Administração" value="adm"/>
                    </Picker>
                    </View>
                    {
                        turma === ""
                        ? null
                        : <Btn title={'Proximo'} onPress={()=> setModal03(true)} color={'#2F9E41'}/>
                    }
                </Pressable>
            </Modal>

            <Modal
                animationType="fade"
                transparent={false}
                visible={modal03} 
            >
                <Pressable style={styles.container} onPress={()=> Keyboard.dismiss()}>
                    <BackBtn onPress={()=> setModal03(false)} />
                    <Text style={styles.text03}>
                        Agora crie uma senha
                    </Text>

                    <InputPassword placeholder={'Digite sua senha'} value={password} setValue={setPassword}/>

                    <InputPassword placeholder={'Confirme sua senha'} value={checkPassword} setValue={setCheckPassword}/>

                    {
                        (password === '' || checkPassword === '')
                        ? null
                        : password === checkPassword 
                            ? <Btn title={'Finalizar'}  onPress={()=> cadastrar(name, username, email, password, turma)} color={'#2F9E41'}/>
                            // ? <Button title="teste" onPress={createUser}/>
                            : <Btn title={'senhas incorretas'} onPress={() => alert('senhas incorretas')} color={'red'}/> 
                    }
                </Pressable>
            </Modal>
        </View>
        
    );
}

export default CreateUser;