import React, {useState, useContext} from "react";
import { View, Text, Touchable, TouchableOpacity, Pressable, Keyboard, Alert } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
import Btn from "../../components/Btn";

import { AuthContext } from "../../contexts/auth";


const Publish = () => {

    const { createPost } = useContext(AuthContext);

    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const [ banner, setBanner ] = useState('');

    const reset = () => {
        setTitle('');
        setText('');
        setBanner('');
        Alert.alert('Noticia publicada');
    }

    return(
        <Pressable
            style={styles.container}
            onPress={()=> Keyboard.dismiss()}
        >
            <Text style={styles.title}>
                Faça uma nova publicação
            </Text>
            <Input placeholder={'Título da publicação'} value={title} setValue={setTitle}/>
            <Input placeholder={'O que você está pensando'} value={text} setValue={setText}/>
            <Input placeholder={'Link da imagem'} value={banner} setValue={setBanner}/>
            {/* <Btn title={'Proximo'} onPress={()=> setModal03(true)} color={'#2F9E41'}/> */}
            <Btn title={'Publicar'} onPress={()=> {createPost(); reset()}} color={'#2f9e41'}/>
            
        </Pressable>
    );
}

export default Publish;