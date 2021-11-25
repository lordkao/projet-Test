import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Left from '../assets/left.png';
import Right from '../assets/right.png';
import IndicatorCarousel from "./IndicatorCarousel";
import ItemCarousel from "./ItemCarousel";

const CarouselIndicators = ({array}) => {

    const [currentIndex,setCurrentIndex] = useState(0)
    const refFlatlist = useRef()
    const length = array.length

    useEffect(()=>{/*Scroll à l'index de l'élément choisit*/
        /*console.log(currentIndex)Affiche dans la console le dernier index enregistré*/

        refFlatlist.current.scrollToIndex({
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

    const renderItem = (item,index) =>{
        return <ItemCarousel item={item} index={index} currentIndex={currentIndex} />
    }

    return(
        <View style={styles.flatListContainer}>
                <FlatList
                    ref={refFlatlist}
                    horizontal
                    keyExtractor={(item) => item.id}
                    data={array}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item,index}) => renderItem(item,index)}
                />

                <IndicatorCarousel 
                    icon={Left} 
                    side={true}
                    fonction={prev}
                />
                <IndicatorCarousel 
                    icon={Right} 
                    side={false}
                    fonction={next}
                />
            </View>
    )
}

export default CarouselIndicators;

const styles = StyleSheet.create({
    flatListContainer:{
        position:'relative',
        flex:1,
        width:'100%',
    },
    left:{
        left:0,
        alignItems:'flex-start'
    },
    right:{
        right:0,
        alignItems:'flex-end'
    },
    btnFlastList:{
        position:'absolute',
        zIndex:5,
        height:'100%',
        width:100,
        paddingHorizontal:10,
        justifyContent:'center',
    },
    btnImage:{
        height:30,
        width:30,
    }
})