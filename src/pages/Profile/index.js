import React, {useState, useEffect, useContext} from "react";
import { View, Text, Button, Image, TouchableOpacity, ScrollView, Modal, FlatList, Alert } from "react-native";
import styles from "./styles";
import ProfileText from "../../components/ProfileText";
import url from "../../services/url";
import Btn from "../../components/Btn";

import { AuthContext } from "../../contexts/auth";

const Profile = () => {


    const { user,  getAvatar, logOff } = useContext(AuthContext);
    
    return(
        <View style={styles.container}>
            <View style={styles.backImg}>
                <Image
                    style={styles.backImg}
                    source={{ uri: "https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper.jpg"}}
                />

                <Image
                    style={styles.avatar}
                    source={{ uri: url + user.avatarSrc.slice(6)}}
                />
            </View>
            <View style={styles.containerName01}>
                <ProfileText title={'Nome'} text={user.name}/>
                <ProfileText title={'Nome de Usuário'} text={user.username}/>
                <ProfileText title={'Email'} text={user.email}/>
                <ProfileText title={'Turma'} text={user.turma}/>
            </View>
            <Btn title={'Sair'} onPress={()=> logOff()} color={'red'} />

        </View>
    );
}

export default Profile;
