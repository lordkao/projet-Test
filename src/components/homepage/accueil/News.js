import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import Polygone from '../../../assets/home/polygone.png';
import News1 from '../../../assets/home/news1.png';
import News2 from '../../../assets/home/news2.png';
import News3 from '../../../assets/home/news3.png';

const News = () => {
    /*Obtenir les dimensions de l'écran*/
    /*const{ width,height } = Dimensions.get('screen')*/

    const [currentIndex,setCurrentIndex] = useState(1)
    const [refFlatlist,setRefFlatList] = useState('')

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

    useEffect(()=>{/*Affiche dans la console le dernier index enregistré*/
        console.log(currentIndex)
    },[currentIndex])

    const moveToElt = (item,index) => {/*Scroll jusqu'à l'élement choisit*/

        setCurrentIndex(item.id)/*Enregistre la valeur de l'index de l'élément choisit par le User*/
        
        refFlatlist.scrollToIndex({/*Scroll par l'index de l'élément choisit*/
            animated:true,
            index: index,
            viewOffset: 0,
            viewPosition: 0.5
        })
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
                    ref={(ref)=> setRefFlatList(ref)}
                    horizontal
                    keyExtractor={(item) => item.id}
                    data={arrayNews}
                    renderItem={({item,index}) => {

                        return(
                            <View style={styles.styleContainer}>
                                <TouchableOpacity 
                                    style={styles.btnNew} 
                                    activeOpacity={0.7}
                                    onPress={() => moveToElt(item,index)}
                                >
                                    <Image 
                                        style={
                                            currentIndex === item.id?
                                            [styles.styleImage,styles.active] 
                                            : 
                                            styles.styleImage
                                        } 
                                        source={item.image}/>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    showsHorizontalScrollIndicator={false}
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
    }
})