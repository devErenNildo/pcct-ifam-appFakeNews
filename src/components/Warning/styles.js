import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        // backgroundColor: '#2f4f4f',
        alignItems: 'center'
    },
    post:{
        width: '85%',
        marginTop: 30,
        overflow: 'hidden',
        backgroundColor: '#D9D9D9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 10
    },
    boxUserImg:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        padding: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },
    userImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userText:{
        flex: 1,
        fontWeight: 'bold',
        color: '#000'
    },
    turmaText:{
        color: '#000',
        fontWeight: 'bold'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    body:{
        fontWeight: 'bold',
        fontSize: 15,
        // color: '#2b2b2b'
        color: 'rgba(0, 0, 0, 0.6)'
    }
});

export default styles;
