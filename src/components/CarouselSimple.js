import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Left from '../assets/left.png';
import Right from '../assets/right.png';
import IndicatorCarousel from "./IndicatorCarousel";
import ItemCarouselSimple from "./ItemCarouselSimple";

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

    const renderItem = (item,index) =>{
        return <ItemCarouselSimple item={item} index={index} currentIndex={currentIndex} />
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
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    length={length}
                />
                <IndicatorCarousel 
                    icon={Right} 
                    side={false}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    length={length}
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