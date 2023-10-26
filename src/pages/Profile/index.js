import React, {useState, useEffect} from "react";
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import axios from "axios";
import ProfileText from "../../components/ProfileText";

const Profile = ({route}) => {

    const [user, setUser] = useState('');
    const { id } = route.params;

    useEffect(()=> {
        const userLogged = async () => {
            try{
                const url = `${config.API}/user/${id}`;
                const response = await axios.get(url);
    
                setUser(response.data);
                console.log(response.data.email);
            }catch(err){
                console.error(`Erro: ${err}`);
            }
        }
        userLogged();
    }, []);

    return(
        <ScrollView style={styles.container}>
            <View style={styles.boxImg}>
                <Image
                    style={styles.backImg}
                    source={{ uri: user.background }}
                />
                <Image
                    style={styles.avatar}
                    source={{ uri: user.avatar }}
                />
            </View>
            <View style={styles.containerName01}>
                <ProfileText title={'Nome'} text={user.name}/>
                <ProfileText title={'Nome de Usuário'} text={user.username}/>
                <ProfileText title={'Email'} text={user.email}/>
                <ProfileText title={'Turma'} text={user.turma}/>
                <ProfileText title={'Foto de perfil'} text={user.avatar}/>
                <ProfileText title={'Foto de capa'} text={user.background}/>
            </View>
        </ScrollView>
    );
}

export default Profile;
