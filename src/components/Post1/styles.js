import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#2F4F4F'
    },
    post:{
        width: '85%',
        marginTop: 30,
        overflow: 'hidden',
        backgroundColor: '#D9D9D9',
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
    },
    boxUserImg:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 5

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
    img:{
        width: '100%',
        height: 200,
    },
    textTitle:{
        color: '#000',
        marginTop: 5,
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 5,
    },
    textBody:{
        color: '#000',
        marginHorizontal: 8,
        marginTop: 10,
        textAlign: 'center',
        paddingBottom: 10,
    },
    textReadMore:{
        color: '#333',
    },
    bottomBar:{
        borderTopWidth: 1,
        elevation: 10,
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 15,
        paddingVertical: 5
    }
});

export default styles;