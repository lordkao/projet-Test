import React from "react";
import {  View, StyleSheet, Image } from 'react-native';
import LoadingImage from '../assets/loader.png'

const Loader = () => {
    return(
        <View style={styles.imageContainer}>
            <Image resizeMode='contain' style={styles.loader} source={LoadingImage}/>
        </View>
    )
}

export default Loader;

const styles = StyleSheet.create({
    imageContainer:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    loader:{
        height:60,
        width:'100%',
        transform:[
            {rotate:'90deg'},
        ],
        justifyContent:'center',
        alignItems:'center',
    },
})