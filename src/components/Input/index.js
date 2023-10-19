import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const Input = (props) => {

    const [ modal01, setModal01 ] = useState(false);

    return(
        <View style={[styles.container, {
            borderColor: modal01 ? '#cfcfcf' : '#808080'
        }]}>
            {
                modal01
                ? <Text style={styles.text}>{props.placeholder}</Text>
                : null
            }
            <TextInput
                style={styles.input}
                onFocus={()=> setModal01(true)}
                onBlur={()=> setModal01(false)}
                placeholder={ modal01 ? '' : props.placeholder }
                placeholderTextColor='#808080'
                value={props.value}
                onChangeText={props.setValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        height: 60,
        justifyContent: 'center',
        borderRadius: 15,
        paddingHorizontal: 15,
        borderWidth: 2,
        marginTop: 15,
        borderColor: '#808080'
    },
    input: {
        // backgroundColor: 'red',
        width: '100%',
        // height: 40,
        flex: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
});

export default Input;