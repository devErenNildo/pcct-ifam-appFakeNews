import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2F4F4F',
        flex: 1
    },
    boxLogo:{
        alignItems: 'center',
        marginTop: 50
    },
    logo:{
        width:80,
        height: 100
    },
    boxText01:{
        alignItems: 'center'
    },
    text01:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerInputs:{
        padding: 25,
        paddingHorizontal: 30
        // width: "78%",
        // alignItems: 'center'
    },
    boxInput:{
        width: '80%',
        marginTop: 10,
        height: 42,
        justifyContent: 'flex-start',
        borderBottomWidth: 2,
        // borderColor: 'red'
    },
    input:{
        // backgroundColor: '#2F4F4F',
        height: 40,
        // borderColor: '#fff',
        paddingLeft: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: -5,

        
    },
    containerBtLogin:{
        alignItems: 'center',
        marginTop: 35,
        width: "100%",
        paddingHorizontal: 30
    },
    boxBtLogin:{
        backgroundColor: '#fff',
        // width: '100%',
        width: 300,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textBtLogin:{
        fontWeight: 'bold',
        color: '#2F4F4F',
        fontSize: 15
    },
    boxEye:{
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#2F4F4F',
    },
    containerRegister:{
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: '8%'
    },
    boxRegister:{
        marginLeft: 7
    },
    textRegister:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    eyePassword:{
        width: 30,
        height: 30
    }
});

export default styles;