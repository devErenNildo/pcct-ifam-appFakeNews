import React, {useState, useEffect} from "react";
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import axios from "axios";
import ProfileText from "../../components/ProfileText";

const Profile = ({route}) => {

    const [user, setUser] = useState('');

    return(
        <View>
            <Text>tela perfil</Text>
        </View>
    );
}

export default Profile;
