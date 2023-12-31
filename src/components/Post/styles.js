import { StyleSheet, Vibration } from "react-native";

const styles = StyleSheet.create({
    container:{
        // alignItems: 'center',
        backgroundColor: '#2F4F4F'
    },
    post:{
        width: '100%',
        marginTop: 30,
        overflow: 'hidden',
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
        color: '#fff'
    },
    img:{
        width: '100%',
        height: 350,
    },
    liksAndComment: {
        flex: 1,
        alignItems: 'flex-start'
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
        // borderBottomWidth: 1,
        flexDirection: 'row',
        // backgroundColor: '#D9D9D9',
        paddingHorizontal: 15,
        paddingTop: 5,
        alignItems: 'center',
        gap: 20
    },
    boxTitleComments: {
        alignItems: 'center'
    },
    titleComments: {
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    boxNumberLikes:{
        paddingHorizontal: 20
    }
});

export default styles;