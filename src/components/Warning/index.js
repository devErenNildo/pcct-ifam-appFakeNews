import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import url from "../../services/url";

export const Warning = ({item}) => {

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.post}
            >
                <View style={styles.boxUserImg}>
                    <Image
                        source={{
                            uri: url + item.user.avatarSrc.slice(6)
                        }}
                        style={styles.userImg}
                    />
                    <Text style={styles.userText}>
                        {item.user.username}
                    </Text>
                    <Text style={styles.turmaText}>
                        {item.turma}
                    </Text>
                </View>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.body}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}