import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import Redplay from '../../../assets/home/redplay.png';
import FastImage from 'react-native-fast-image';

const ItemFastBegin = ({ array, index}) => {

    return (
        <TouchableOpacity 
            key={array.name+index} 
            activeOpacity={0.7} 
            style={styles.btnBegin}
        >
            <FastImage 
                style={styles.imageBackground} 
                source={{uri:array.image.contentUrl,priority:FastImage.priority.high}}
            />
            <Image 
                style={styles.redPlay}
                source={Redplay}
            />
            <Text style={styles.title}>{array.name}</Text>{/*Titre*/}
            <Text 
                style={styles.description}
                numberOfLines={2}
                ellipsizeMode={'tail'}
            >{array.content}</Text>{/*Description*/}
        </TouchableOpacity>
    )
}

export default ItemFastBegin

const styles = StyleSheet.create({
    btnBegin:{
        position:'relative',
        zIndex:0,
        height:150,
        width:'100%',
        borderWidth:1,
        borderRadius:15,
        overflow:'hidden',
        marginVertical:5,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    imageBackground:{
        position:'absolute',
        zIndex:1,
        opacity:0.5,
        height:'100%',
        width:'100%',
    },
    title:{
        zIndex:5,
        width:'85%',
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        textAlign:'left',
        marginLeft:20,
        marginTop:'15%',
    },
    description:{
        zIndex:5,
        height:40,
        width:'70%',
        color:'white',
        textAlign:'left',
        textAlignVertical:'center',
        marginLeft:20,
    },
    redPlay:{
        position:'absolute',
        zIndex:5,
        bottom:-5,
        right:10,
        height:70,
        width:50,
    },
})
