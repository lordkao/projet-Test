import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Left from '../assets/left.png';
import Right from '../assets/right.png';

const CarouselIndicators = ({array}) => {

    const [currentIndex,setCurrentIndex] = useState(0)
    const refFlatlist = useRef()
    const length = array.length

    useEffect(()=>{/*Scroll à l'index de l'élément choisit*/
        console.log(currentIndex)/*Affiche dans la console le dernier index enregistré*/

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

    return(
        <View style={styles.flatListContainer}>
                <FlatList
                    ref={refFlatlist}
                    horizontal
                    keyExtractor={(item) => item.id}
                    data={array}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
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
                />
                <TouchableOpacity 
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
    )
}

export default CarouselIndicators;

const styles = StyleSheet.create({
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