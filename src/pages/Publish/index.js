import React, {useState, useContext, useEffect} from "react";
import { View, Text, TouchableOpacity, Keyboard, Alert, Image, TextInput, Pressable, Modal, ActivityIndicator } from "react-native";
import styles from "./styles";
import Btn from "../../components/Btn";
import BackBtn from "../../components/BackBtn";

import { Picker } from "@react-native-picker/picker";

import url from "../../services/url";

import { AuthContext } from "../../contexts/auth";

import PublishAdemir from "../../components/PublishAdemir";

import Input from "../../components/Input";



const Publish = () => {

    
    
    const { selectImagecreatePost, postImage, resetImage, publishPost, avatarImage, user, publicarAviso, loading } = useContext(AuthContext);

    const avatar = url + avatarImage;

    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');

    const [controleTitleText, setControleTitleText] = useState(true);

    const [ modalAviso, setModalAviso ] = useState(false);
    const [ titleAviso, setTitleAviso ] = useState('');
    const [ turmaAviso, setTurmaAviso ] = useState('Programação de Jogos');
    const [ textAviso, setTextAviso ] = useState('');

    const reset = () => {
        setTitle('');
        setText('');
        setControleTitleText(true);
        // Alert.alert('Noticia publicada');
    }

    const resetAviso = () => {
        setTitleAviso('');
        setTextAviso('');
        setTurmaAviso('Programação de Jogos');
        setModalAviso(false);
    }


    return(
        <Pressable
            style={styles.container}
            onPress={()=> Keyboard.dismiss()}
        >
            {
                user.servidor === false
                ?
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
                // TELA DO SERVIDOR
                :
                postImage === null
                ?
                <View style={{flex: 1}}>
                    <Modal
                        animationType="fade"
                        transparent={false}
                        visible={modalAviso}
                    >
                        <Pressable style={{ flex: 1, backgroundColor: '#2F4F4F'}} onPress={()=> Keyboard.dismiss()}>
                            <View style={{padding: 10, marginLeft: '5%'}}>
                                <BackBtn onPress={()=> resetAviso()}/>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff', padding: 10}}>
                                    Sobre o que se trata seu aviso
                                </Text>
                                <Input placeholder={'Título'} value={titleAviso} setValue={setTitleAviso} />
                                <Input placeholder={'Digite uma descrição do aviso'} value={textAviso} setValue={setTextAviso}/>

                                <View style={{borderWidth: 2, borderColor: '#808080', borderRadius: 15, marginTop: 25, width: '80%'}}>
                                    <Picker
                                        selectedValue={turmaAviso}
                                        onValueChange={(item)=> setTurmaAviso(item)}
                                    >
                                        <Picker.Item label="Programação de Jogos" value="Programação de Jogos"/>
                                        <Picker.Item label="Informática" value="Informática"/>
                                        <Picker.Item label="Informática para Internet" value="Informática para Internet"/>
                                        <Picker.Item label="Recursos pesqueiros" value="Recursos pesqueiros"/>
                                        <Picker.Item label="Administração" value="Administração"/>
                                        <Picker.Item label="Todos" value="Todos"/>
                                    </Picker>
                                </View>
                                {
                                    titleAviso !== '' && textAviso !== '' && turmaAviso !== ''
                                    ?   loading 
                                        ? <ActivityIndicator size={20} color={'#fff'}/>
                                        : <Btn title={'Publicar'} onPress={()=> {publicarAviso(titleAviso, textAviso, turmaAviso); resetAviso()}} color={'#2f9e41'}/>
                                    :<Btn title={'Preencha todos os campos'} color={'red'}/>
                                }
                            </View>
                        </Pressable>
                    </Modal>
                    <View>
                        <Text style={styles.title}>
                            Selecione uma opção para fazer uma publicação
                        </Text>
                    </View>
                    <Btn title={'Publicação'} onPress={()=> selectImagecreatePost()} color={'#2f9e41'} />
                    <Btn title={'Aviso'} onPress={()=> setModalAviso(true)} color={'red'} />
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