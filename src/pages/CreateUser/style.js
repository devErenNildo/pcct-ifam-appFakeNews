import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F4F4F',
        flex: 1,
        padding: 15
    },
    text01:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginVertical: 20
    },
    text02: {
        color: '#fff',
        fontWeight: 'bold'
    },
    text03: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    boxTurma:{
        borderWidth: 2,
        borderColor: '#808080',
        borderRadius: 15,
        marginTop: 25
    },
    imageAvatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 10,
        borderWidth: 1,
    },
    boxButtomModal04: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    buttomModal04: {
        width: '47%',
        borderRadius: 10,
        alignItems: 'center'
    },
    textButtomModaL04: {
        padding: 20
    }
});

export default styles;