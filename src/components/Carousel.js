import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, VirtualizedList, Dimensions, Image, TouchableOpacity } from 'react-native'
import PlusCircle from '../assets/home/plus-circle.png'
import Left from '../assets/left.png'
import Right from '../assets/right.png'

const Carousel = ({ data }) => {
    const{ width, height } = Dimensions.get('screen')
    const[currentIndex,setCurrentIndex] = useState(0)

    const imageWidth = (width-40)*0.5/*Calcul la largeur selon la taille de l'écran*/
    const imageHeight = imageWidth*1/*Calcul la heuteur selon la taille de l'écran*/
    const virtualizedList = useRef()/*Copy de VirtualisedList afin de faire ressortir ses fonctionnalités */
    const length = data.length/*Longueur du tableau data*/
    
    const styles = StyleSheet.create({
        carouselContainer:{
            position:'relative',
            flex:1,
            flexDirection:'row',
            marginHorizontal:20
        },
        frameContainer:{
            flex:1,
        },
        frame:{
            height:imageHeight,
            width:imageWidth,
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal:5,
        },
        frameContent:{
            position:'relative',
            flex:1,
            width:'100%',
            justifyContent:'flex-end',
            alignItems:'center',
            borderRadius:15,
            overflow:'hidden'
        },
        frameTitle:{
            position:'absolute',
            zIndex:0,
            height:'100%',
            color:'white',
            fontSize:20,
            fontWeight:'bold',
            textAlign:'center',
            textAlignVertical:'center',
        },
        numberVideos:{
            position:'absolute',
            zIndex:0,
            top:10,
            color:'white',
            fontSize:16,
            fontWeight:'bold',
            textAlign:'center',
            textAlignVertical:'center',
        },
        imageBackground:{
            position:'absolute',
            zIndex:-1,
            width:'100%',
            height:'100%',
            opacity:0.5
        },
        btnFrame:{
            height:25,
            width:'65%',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:15,
            backgroundColor:'white',
            borderRadius:8,
        },
        btnFrameText:{
            fontSize:11,
            fontWeight:'bold',
            textAlign:'center',
            textAlignVertical:'center',
        },
        plusCircle:{
            height:15,
            width:15,
            marginRight:5
        },
        btnFrameContainer:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
        },
        indicators:{
            position:'absolute',
            zIndex:5,
            height:'100%',
            paddingHorizontal:20,
            justifyContent:'center',
            alignItems:'center',
        },
        left:{
            left:-40,
            alignItems:'flex-start'
        },
        right:{
            right:-40,
            alignItems:'flex-end'
        },
        imageIndicators:{
            height:30,
            width:20,
        }
    })

    /*Indicateurs du carousel*/
    const prev = () => {
        setCurrentIndex(currentIndex? currentIndex-2 : length-1)
    }
    const next = () => {
        setCurrentIndex(currentIndex === length-1? 0 : currentIndex+2)
    }

    useEffect(()=>{/*Gère le scroll du carousel*/
        console.log(currentIndex)
        virtualizedList.current.scrollToIndex({
            animated:true,
            index:currentIndex,
            viewOffset:0,
            viewPosition:0
        })
    },[currentIndex])

    const getItem = (data,index) => ({/*Retourne un objet créé à l'aide de la valeur de data et de son index*/
        id: 'id: '+index,
        name: data[index].name,
        key: data[index].name + index,
        imageUrl: data[index].imageUrl,
        category: data[index].categoryName
    })  

    const getItemCount = (data) => data.length /*Retourne le nombre d'items à créer*/

    const Item = ({ name, imageUrl}) => {
        return(
            <View style={styles.frameContainer}>
                <View style={styles.frame}>
                    <View style={styles.frameContent}>
                        
                        <Image source={{uri:imageUrl}} style={styles.imageBackground}/>{/*Image de fond*/}
                        <Text style={styles.numberVideos}>44 vidéos</Text>{/*Nombre de vidéos du thème de la catégorie*/}
                        <Text style={styles.frameTitle}>{name}</Text>{/*Titre du thème de la catégorie*/}

                        <TouchableOpacity activeOpacity={0.7} style={styles.btnFrame}>{/*Bouton voir la chaîne*/}
                            <View style={styles.btnFrameContainer}>
                                <Image style={styles.plusCircle} source={PlusCircle}/>
                                <Text style={styles.btnFrameText}>Voir la chaîne</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.carouselContainer}>
            {/*Indicateurs*/}
            <TouchableOpacity 
                style={[styles.indicators,styles.left]}
                onPress={() => prev()}
            >
                <Image style={styles.imageIndicators} resizeMode='contain' source={Left}/>
            </TouchableOpacity>

            <VirtualizedList
                ref={virtualizedList}
                initialNumToRender={4}
                data={data}
                getItem={getItem}
                getItemCount={getItemCount}
                renderItem={({item}) => <Item name={item.name} imageUrl={item.imageUrl}/>}
                horizontal
                keyExtractor={(item) => item.key}
                pagingEnabled={false}
            />

            <TouchableOpacity 
                style={[styles.indicators,styles.right]}
                onPress={() => next()}
            >
                <Image style={styles.imageIndicators} resizeMode='contain' source={Right}/>
            </TouchableOpacity>

        </View>
    )
}

export default Carousel
