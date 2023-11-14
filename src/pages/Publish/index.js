import React, {useState, useContext, useEffect} from "react";
import { View, Text, TouchableOpacity, Keyboard, Alert, Image, TextInput, Pressable, LogBox } from "react-native";
import styles from "./styles";
import Btn from "../../components/Btn";
import BackBtn from "../../components/BackBtn";

import url from "../../services/url";

import { AuthContext } from "../../contexts/auth";



const Publish = () => {

    
    
    const { selectImagecreatePost, postImage, resetImage, publishPost, avatarImage } = useContext(AuthContext);

    const avatar = url + avatarImage;

    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const [ banner, setBanner ] = useState('');

    const [controleTitleText, setControleTitleText] = useState(true);
    const [ controleReset, setControleReset ] = useState(false);

    const reset = () => {
        setTitle('');
        setText('');
        setControleTitleText(true);
        // Alert.alert('Noticia publicada');
    }


    return(
        <Pressable
            style={styles.container}
            onPress={()=> Keyboard.dismiss()}
        >
            {
                postImage === null
                    ?
                    <View style={{flex: 1}}>
                        <View>
                            <Text style={styles.title}>
                                Selecione uma imagem para fazer uma publicação
                            </Text>
                        </View>
                        <Btn title={'Selecionar Imagem'} onPress={()=> selectImagecreatePost()} color={'#2f9e41'} />
                    </View>
                    :
                    <View>
                        <View style={styles.boxBtnTop}>
                            <BackBtn onPress={()=> {resetImage(''); reset()}}/>
                            <Text style={styles.title}>
                                Nova publicação
                            </Text>
                        </View>
                        <View style={styles.boxImage}>
                            <Image
                                style={styles.avatarImage}
                                source={{uri: avatar}}
                            />
                            <View style={styles.boxInput}>
                                {
                                    controleTitleText
                                    ?
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={setTitle}
                                            placeholder="Digite um título"
                                            editable
                                            multiline
                                            numberOfLines={4}
                                            maxLength={1000}
                                        />
                                    : 
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={setText}
                                            placeholder="Escreva uma legenda..."
                                            editable
                                            multiline
                                            numberOfLines={4}
                                            maxLength={1000}
                                        />
                                }
                            </View>
                            <Image 
                                style={styles.postImage}
                                source={{uri: postImage.uri}}
                            />
                        </View>
                        {
                            controleTitleText
                            ? title === ''
                                ? <Btn title={'Escreva um título'} color={'red'} />
                                : <Btn title={'Proximo'} color={'#2f9e41'} onPress={()=> setControleTitleText(false)}/>
                            : text === ''
                                ? <Btn title={'Escreva uma legenda'} color={'red'} />
                                : <Btn title={'Publicar'} color={'#2f9e41'} onPress={()=> {publishPost(title, text); reset()}} />
                        }
                    </View>
            }
        </Pressable>
    );
}

export default Publish;