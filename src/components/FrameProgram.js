import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Frameprogram = ({title,urlImage}) =>{
    return(
        <View style={styles.container}>
            <Image 
                style={styles.backgroundImageFrame} 
                source={{uri:urlImage}}
            />
            {/*Titre du programme*/}
            <Text style={styles.lessonTitle}>
                {title}
            </Text>
            {/*Bouton pour démarrer le cours*/}
            <TouchableOpacity activeOpacity={0.7} style={styles.frameBtn}>
                <Text style={styles.frameBtnContent}>Démarrer</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Frameprogram;

const styles = StyleSheet.create({
    container:{
        position:'relative',
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    lessonTitle:{
        color:'white',
        fontWeight:'900',
        width:'70%',
        textAlign:'center',
        marginBottom:5,
        marginTop:30
    },
    frameBtn:{
        width:110,
        backgroundColor:'red',
        paddingVertical:2,
        borderRadius:3,
    },
    frameBtnContent:{
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center'
    },
    backgroundImageFrame: {
        position:'absolute',
        zIndex:-1,
        left:-120,
        width:'180%',
        height:'100%',
        opacity:0.5
        /*height:'100%',
        width:'100%',*/
    },
})