import React, {useState, useEffect, useContext} from "react";
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import axios from "axios";
import ProfileText from "../../components/ProfileText";

import { AuthContext } from "../../contexts/auth";

const Profile = () => {

    const { user } = useContext(AuthContext);

    // const [user, setUser] = useState('');

    return(
        <View style={styles.container}>
            <View style={styles.backImg}>
                <Image
                    style={styles.backImg}
                    source={{ uri: "https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper.jpg"}}
                />
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://www.atrevida.com.br/wp-content/uploads/2021/08/josh-beauchamp-danca-funk-brasileiro-sem-camisa-e-web-vai-a-loucura.jpg'}}
                />
            </View>
            <View style={styles.containerName01}>
                <ProfileText title={'Nome'} text={user.name}/>
                <ProfileText title={'Nome de Usuário'} text={user.username}/>
                <ProfileText title={'Email'} text={user.email}/>
                <ProfileText title={'Turma'} text={user.turma}/>
            </View>
        </View>
    );
}

export default Profile;
