import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import Polygone from '../../../assets/home/polygone.png';
import News1 from '../../../assets/home/news1.png';
import News2 from '../../../assets/home/news2.png';
import News3 from '../../../assets/home/news3.png';
import CarouselIndicators from "../../CarouselIndicators";

const News = () => {
    /*Obtenir les dimensions de l'écran*/
    /*const{ width,height } = Dimensions.get('screen')*/


    const newsTitle = 'NOUVEAUTÉS'
    const arrayNews = [
        { id: 1,image: News1 },
        { id: 2,image: News2 },
        { id: 3,image: News3 },
        { id: 4,image: News1 },
        { id: 5,image: News2 },
        { id: 6,image: News3 },
        { id: 11,image: News1 },
        { id: 21,image: News2 },
        { id: 31,image: News3 },
        { id: 41,image: News1 },
        { id: 51,image: News2 },
        { id: 61,image: News3 },
    ]
    

    return(
        <View style={styles.newsContainer}>

            {/*Titre nouveautés*/}
            <View style={styles.titleContainer}>
                <Image style={styles.polygone} source={Polygone}/>
                <Text style={styles.title}>
                    {newsTitle}
                </Text>
            </View>

            <View style={styles.flatListContainer}>
                <CarouselIndicators
                    array={arrayNews}
                />
            </View>

        </View>
    )
}

export default News;

const styles = StyleSheet.create({
    newsContainer:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'flex-start',
    },
    titleContainer:{
        width:'100%',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:24,
        color:'white',
        fontWeight:'900',
    },
    polygone:{
        height:20,
        width:20,
        marginRight:2,
    },
    flatListContainer:{
        position:'relative',
        flex:1,
        width:'100%',
    },
})