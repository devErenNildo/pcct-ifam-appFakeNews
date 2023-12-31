import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Switch } from "react-native";

const InputPassword = (props) => {

    const [ modal01, setModal01 ] = useState(false);
    const [ passwordVisible, setPasswordVisible ] = useState(false);

    return(
        <View style={{alignItems: 'center'}}>
            <View style={[styles.container, {
                borderColor: modal01 ? '#cfcfcf' : '#808080'
            }]}>
                <View style={styles.containerInput}>
                    {
                        modal01
                        ? <Text style={styles.text}>{props.placeholder}</Text>
                        : null
                    }
                    <TextInput
                        style={styles.input}
                        onFocus={()=> setModal01(true)}
                        onBlur={()=> setModal01(false)}
                        placeholder={ props.placeholder }
                        placeholderTextColor='#808080'
                        value={props.value}
                        onChangeText={props.setValue}
                        secureTextEntry={!passwordVisible}
                    />
                </View>
                <View>
                    <Switch
                        value={passwordVisible}
                        onValueChange={()=> setPasswordVisible(!passwordVisible)}
                    />
                    {
                        passwordVisible ? <Text>Ocultar senha</Text> : <Text>Ver senha</Text>
                    }
                </View>
            </View>
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
        borderColor: '#808080',
        flexDirection: 'row',
        alignItems: 'center',
        width: 300
    },
    containerInput: {
        justifyContent: 'center',
        flex: 1
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

export default InputPassword;