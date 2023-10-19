import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Btn = (props) => {
    return(
        <TouchableOpacity
            style={[styles.container, {backgroundColor: props.color}]}
            onPress={props.onPress}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default Btn;