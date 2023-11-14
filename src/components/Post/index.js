import React, { useState, useEffect, useContext } from 'react';
import { Alert, Text, Image, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';
import url from '../../services/url';
import InputComment from '../InputComment';

import { AuthContext } from '../../contexts/auth';

const Post = ({ item }) => {

    const [ viewComments, setViewComments ] = useState(false);

    const {likedAndPost, user} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <View style={styles.post}>
                {/* INFORMAÇÕES DO AUTOR DA PUBLICAÇÃO */}
                <View style={styles.boxUserImg}>
                    {/* IMAGEM DO AUTOR DA PUBLICAÇÃO */}
                    <Image 
                        source={{
                            uri: url + item.user.avatarSrc.slice(6)
                        }}
                        style={styles.userImg}
                    />
                    {/* NOME DO AUTOR */}
                    <Text style={styles.userText}>
                        {item.user.username}
                    </Text>
                </View>
                <Image
                    source={{
                        uri: url + item.src.slice(6)
                    }}
                    style={styles.img}
                />
                
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={viewComments}
                    backdropColor='#2F4F4F'
                >
                    <InputComment onPress={() => setViewComments(!viewComments)} idPost={item._id} allComents={item.comments}/>
                </Modal>
            </View>
            {/* BOTÃO DE LIKES E COMENTÁRIOS */}
            <View style={styles.bottomBar}>
                {/* like */}
                <TouchableOpacity onPress={()=> likedAndPost(item._id)}>
                {/* <TouchableOpacity onPress={()=> console.log(item.likes)}> */}
                {
                    item.likes.some(like => like.userId === user._id)
                    ? (<Icon name={'heart'} size={30} color={'red'} />)
                    : (<Icon name={'heart-o'} size={30} color={'#000'} />)
                }
                </TouchableOpacity>
                
                {/* comentário */}
                <TouchableOpacity onPress={()=> setViewComments(!viewComments)}>
                    <Icon name={'comment-o'} size={30} color={'#000'} />
                </TouchableOpacity>
            </View>
            <View style={styles.boxNumberLikes}>
                <Text>{item.likes.length}</Text>
            </View>
            
        </View>
    );
}

export default Post