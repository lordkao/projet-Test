import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import Polygone from '../../../assets/home/polygone.png';
import News1 from '../../../assets/home/news1.png';
import News2 from '../../../assets/home/news2.png';
import News3 from '../../../assets/home/news3.png';
import CarouselSimple from "../../CarouselSimple";

const News = () => {

    const newsTitle = 'NOUVEAUTÉS'
    const arrayNews = [
        { id: 1,image: News1 },
        { id: 2,image: News2 },
        { id: 3,image: News3 },
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
                <CarouselSimple
                    array={arrayNews}
                />
            </View>

        </View>
    )
}

export default News;

const styles = StyleSheet.create({
    newsContainer:{
        height:220,
        width:'100%',
        marginTop:10,
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
        fontSize:20,
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