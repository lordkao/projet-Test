import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import PlusCircle from '../assets/home/plus-circle.png'
import FastImage from 'react-native-fast-image'

const ItemCarouselDouble = ({ name, imageUrl, numberVideos , sizeStyle }) => {
    return (
        <View style={styles.frameContainer}>
            <View style={sizeStyle}>
                <View style={styles.frameContent}>
                    <FastImage
                        style={styles.imageBackground}
                        source={{
                            uri: imageUrl,
                            priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <Text style={styles.numberVideos}>{numberVideos} vidéos</Text>{/*Nombre de vidéos du thème de la catégorie*/}
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

export default ItemCarouselDouble

const styles = StyleSheet.create({
    frameContainer:{
        flex:1,
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
        color:'black',
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
})
