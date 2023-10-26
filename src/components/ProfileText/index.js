import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';

const ProfileText = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.texts}>
                {props.title}
            </Text>
            <View style={styles.boxName}>
                <Text style={styles.textName}>
                    {props.text}
                </Text>
                <TouchableOpacity>
                    {/* <Entypo name="pencil" size={27} color="red" /> */}
                    <Image source={require('../../assets/pencil.png')} style={styles.pencil}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    texts: {
        color: '#fff',
        fontWeight: 'bold'
    },
    boxName:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 20
    },
    textName:{
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    pencil:{
        width:27,
        height: 27
    }
});

export default ProfileText;