import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import Polygone from '../../../assets/home/polygone.png';
import News1 from '../../../assets/home/news1.png';
import News2 from '../../../assets/home/news2.png';
import News3 from '../../../assets/home/news3.png';
import Left from '../../../assets/home/left.png';
import Right from '../../../assets/home/right.png';

const News = () => {
    /*Obtenir les dimensions de l'écran*/
    /*const{ width,height } = Dimensions.get('screen')*/

    const [currentIndex,setCurrentIndex] = useState(0)
    const refFlatlist = useRef()

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
    const length = arrayNews.length

    useEffect(()=>{/*Affiche dans la console le dernier index enregistré*/
        console.log(currentIndex)

        refFlatlist.current.scrollToIndex({/*Scroll par l'index de l'élément choisit*/
            animated:true,
            index: currentIndex,
            viewOffset: 0,
            viewPosition: 0.5
        })

    },[currentIndex])

    const prev = () => {/*Soustrait 1 à l'index*/
        setCurrentIndex(currentIndex?currentIndex-1: length -1)
    }
    const next = () => {/*Ajoute 1 à l'index*/
        setCurrentIndex(currentIndex === length -1? 0 : currentIndex+1)
    }

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
                <FlatList
                    ref={refFlatlist}
                    horizontal
                    keyExtractor={(item) => item.id}
                    data={arrayNews}
                    scrollEnabled={false}
                    renderItem={({item,index}) => {

                        return(
                            <View style={styles.styleContainer}>
                                <TouchableOpacity 
                                    style={styles.btnNew} 
                                    activeOpacity={0.7}
                                >
                                    <Image 
                                        style={
                                            currentIndex === index?
                                            [styles.styleImage,styles.active] 
                                            : 
                                            styles.styleImage
                                        } 
                                        source={item.image}
                                    />
                                    
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    showsHorizontalScrollIndicator={false}
                />
                <TouchableOpacity 
                    activeOpacity={0.5}
                    style={[styles.btnFlastList,styles.left]}
                    onPress={() => prev()}
                >
                    <Image 
                        source={Left}
                        style={styles.btnImage}
                        resizeMode='contain'
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={0.5}
                    style={[styles.btnFlastList,styles.right]}
                    onPress={() => next()}
                >
                    <Image 
                        source={Right}
                        style={styles.btnImage}
                        resizeMode='contain'
                    />
                </TouchableOpacity>

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
    styleContainer: {
        height: 160,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        marginTop:15,
        /* borderColor:'red',
        borderWidth:1 */
    },
    styleImage: {
        resizeMode:'cover',
        height: 130,
        width:250,
        borderRadius:10,
    },
    active:{
        height:'100%',
    },
    btnNew:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    left:{
        left:0,
        paddingLeft:10,
        alignItems:'flex-start'
    },
    right:{
        right:0,
        paddingRight:10,
        alignItems:'flex-end'
    },
    btnFlastList:{
        position:'absolute',
        zIndex:5,
        height:'100%',
        width:100,
        justifyContent:'center',
    },
    btnImage:{
        height:30,
        width:30,
    }
})