import React from "react";
import Icon from 'react-native-vector-icons/dist/Ionicons';
// import {FontAwesome6} from 'react-native-vector-icons'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";

const TabBarCustom = ({ state, descriptors, navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if ( !isFocused && !event.defaultPrevent){
                            navigation.navigate({ name: route.name, marge: true});
                        }
                    }

                    return(
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            // onLongPress={onLongPress}
                            style={styles.bottomTab}
                        >
                            <View style={styles.conatinerButtom}>
                                <View style={[styles.boxButtom, {
                                        backgroundColor: isFocused? 'rgba(47, 79, 79, 0.2)' : 'transparent'}
                                    ]}>
                                    <Icon name={options.tabBarIcon} size={35} color={ isFocused ? '#2F9E41' : '#2f4f4f'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box:{
        flexDirection: 'row',
        marginBottom: 30,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        gap: 10,
        elevation: 10,
        borderRadius: 15
    },
    bottomTab:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    conatinerButtom:{
        alignItems: 'center',
        padding: 4,
    },
    boxButtom:{
        padding: 5,
        borderRadius: 15
    }
});

export default TabBarCustom;