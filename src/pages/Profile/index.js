import React, {useState, useEffect, useContext} from "react";
import { View, Text, Button, Image, TouchableOpacity, ScrollView, Modal, FlatList, Alert } from "react-native";
import styles from "./styles";
import ProfileText from "../../components/ProfileText";
import url from "../../services/url";

import { AuthContext } from "../../contexts/auth";

const Profile = () => {


    const { user, createAvatar, avatarImage, getAvatar } = useContext(AuthContext);
    const avatar = user.avatar;
    const fundo = user.background;

    const uriAvatar = url + avatarImage;

    const [ modalSemImagem, setModalSemImagem ] = useState(false)
    const [controleModal, setControleModal] = useState(false);

    useEffect(() => {
        if (avatar === "notImage" || fundo === "notImage") {
            setModalSemImagem(true);
        }
    }, []);

    useEffect(()=> {
        getAvatar();
        console.log('entrou effect avayar');
    }, [avatarImage]);
    return(
        <View style={styles.container}>
            <View style={styles.backImg}>
                <Image
                    style={styles.backImg}
                    source={{ uri: "https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper.jpg"}}
                />
                <Image
                    style={styles.avatar}
                    source={{ uri: uriAvatar}}
                />
            </View>
            <View style={styles.containerName01}>
                <ProfileText title={'Nome'} text={user.name}/>
                <ProfileText title={'Nome de Usuário'} text={user.username}/>
                <ProfileText title={'Email'} text={user.email}/>
                <ProfileText title={'Turma'} text={user.turma}/>
                {/* <TouchableOpacity onPress={()=> createAvatar()}> */}
                <TouchableOpacity onPress={()=> getAvatar()}>
                    <Text>
                        {/* {avatarImage.src} */}
                        {uriAvatar}
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalSemImagem}
            >
                <TouchableOpacity
                    onPress={()=> createAvatar()}
                >
                    <Text style={{backgroundColor: 'red'}}>
                        o botão
                    </Text>
                </TouchableOpacity>

            </Modal> */}
        </View>
    );
}

export default Profile;
