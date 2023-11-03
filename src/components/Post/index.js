import React, { useState, useEffect } from 'react';
import { Alert, Text, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import styles from './styles';


const Post = ({ item }) => {

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        // onPress={Detalhes}
        style={styles.post}
        activeOpacity={0.9}
      >
        <View
          style={styles.boxUserImg}
        >
          <Image
            source={{
              uri: item.user.avatar
            }}
            style={styles.userImg}
          />
          <Text style={styles.userText}>
            {item.user.username}
          </Text>
        </View>
          <Image
            source={{
              uri: item.banner,
            }}
            style={styles.img}
          />
          <Text
            style={styles.textTitle}
          >
            {item.title}
          </Text>
          <Text
            style={styles.textBody}
          >
            {item.text.substring(0, 255) + '...'}
            <Text
              style={styles.textReadMore}
            >
              Leia mais
            </Text>
          </Text>
        <View
          style={styles.bottomBar}
        >
        <TouchableOpacity
            onPress={()=> Alert.alert('Pegou virus')}
        >
            <Icon name='hearto' size={25} color='#000' />
        </TouchableOpacity>
          <Text style={styles.userText}>
            {item.likes}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Post;
