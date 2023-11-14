import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        backgroundColor: '#2F4F4F',
        flex: 1,
        // alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        // marginTop: 25,
        textAlign: 'center'
    },
    boxImage:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '50%',
        padding: 20,
        gap: 10,
        borderBottomWidth: 1,
    },
    avatarImage:{
        width: '20%',
        height: 60,
        marginTop: 20,
        borderRadius: 20,
    },
    postImage:{
        width: '30%',
        height: 60
    },
    boxBtnTop:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20
    },
    boxInput:{
        width: '60%'
    },
    input:{
        flex: 1,
    }
});

export default styles;