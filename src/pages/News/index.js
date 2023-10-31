import React, { useState, useEffect, useContext, useCallback } from "react";
import { ScrollView, FlatList, View, Text, TouchableOpacity, Button } from "react-native";
import Post from "../../components/Post";

import { AuthContext } from "../../contexts/auth";

const News = () =>{

    const { viewNews, news } = useContext(AuthContext);

    // const [ posts, setPosts ] = useState([]);

    useEffect(()=>{
        viewNews();
    }, [news]);
    

    return(
        <ScrollView
            contentContainerStyle={{
                width: '100%',
                backgroundColor: '#2F4F4F'
            }}
            horizontal
            scrollEnabled={false}
        >
            
            <FlatList
                data={news}
                renderItem={({ item, index }) => <Post item={item} />}
                keyExtractor={(item, index) => String(index)}
            />
        </ScrollView>

        // <View style={{backgroundColor: '#000', flex: 1}}>
        //     <Button
        //         title="teste"
        //         onPress={()=> console.log(viewNews())}
        //     />
        // </View>
    );
}

export default News;