import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, FlatList, Image } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import url from "../../services/url";

import { AuthContext } from "../../contexts/auth";

const InputComment = (props) => {

    const [ msgComment, setMsgComment ] = useState(null);
    const { commentAndPost, buscarUserId, userComment } = useContext(AuthContext);


    const data = props.allComents;

    const CommentComponet = ({ item }) => {

        // buscarUserId(item.userId);

        return(
            <View style={{flexDirection: 'row', alignItems: 'flex-start', gap: 15, paddingVertical: 10}}>
                <Image
                    style={{width: 50, height: 50, borderRadius: 25}}
                    source={{ uri: url + item.src.slice(6)}}
                />

                {/* PARTE DO NOME DO USUÁRIO E O COMENTÁRIO QUE FEZ */}
                <View style={{paddingRight: '30%'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#fff'}}>
                        {item.username}
                    </Text>
                    <Text style={{ color: '#b0b0b0'}}>
                        {item.comment}
                    </Text>
                </View>
            </View>
        );
    }


    return(

        <Pressable onPress={()=> props.onPress} style={styles.container}>
            <Pressable
                onPress={props.onPress}
                style={styles.box}
            >
                <Text style={styles.textTitle}>
                    Comentários
                </Text>
                <View style={styles.boxComments}>
                    {/* TODOS OS COMENTÁRIOS */}
                    <View style={styles.boxCommentsText}>
                        <FlatList
                            data={data}
                            renderItem={({item}) => <CommentComponet item={item}/>}
                            keyExtractor={(item, index) => String(index)}
                        />
                    </View>
                    {/* ARÉA DO INPUT DE COMENTÁRIO */}
                    <View style={styles.boxInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="escreva um comentário..."
                            placeholderTextColor={'#000'}
                            value={msgComment}
                            onChangeText={setMsgComment}
                        />
                        <TouchableOpacity
                            onPress={()=> {commentAndPost(props.idPost, msgComment); setMsgComment(null)}}
                            // onPress={()=> console.log(props.allComents)}
                        >
                            <Icon name={'location-arrow'} size={35} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    box:{
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        height: '70%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textTitle:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    boxComments: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'space-between',
        width: '100%'
    },
    boxInput:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    boxCommentsText:{
        flex: 1
    },
    textComments: {
        color: '#fff'
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '88%',
        borderRadius: 50,
        paddingHorizontal: 20,
        color: '#000',
        fontWeight: 'bold'
    }
});

export default InputComment