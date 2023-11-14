import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2F4F4F'
    },
    boxImg:{
        paddingTop: 50,
        // alignItems: 'center'
        position: 'relative',
    },
    backImg:{
        width: '100%',
        height: 200,
        position: 'absolute',
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 100,
        position: 'absolute',
        marginTop: 30,
        marginLeft: 20,
    },
    containerName01:{
        marginTop: 220,
        paddingHorizontal: 20
    },
    boxName:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textName:{
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    texts:{
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default styles;
