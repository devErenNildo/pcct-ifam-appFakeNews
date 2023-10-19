import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

const BackBtn = (props) => {
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}
        >
            <Image source={require('../../assets/seta.png')} style={styles.image}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        // backgroundColor: 'red',
        width: '15%'
    },
    image: {
        width: 25,
        height: 25
    }
});

export default BackBtn