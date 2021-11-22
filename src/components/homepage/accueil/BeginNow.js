import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Redplay from '../../../assets/home/redplay.png';

const BeginNow= () => {

    const array = [1,2,3,4,5,6]
    
    return(
        <View style={styles.beginContainer}>

            {
                array.map( (frame,index)=>{
                    return (
                        <TouchableOpacity
                            key={frame+index}
                            activeOpacity={0.7}
                            style={styles.btnBegin}
                        >
                            <Image 
                                style={styles.redPlay}
                                source={Redplay}
                            />
                            <Text style={styles.title}>Title</Text>{/*Titre*/}
                            <Text style={styles.description}>Description</Text>{/*Description*/}

                        </TouchableOpacity>
                    )
                })
            }

        </View>
    )
}

export default BeginNow;

const styles = StyleSheet.create({
    beginContainer:{
        flex:1,
        width:'100%',
    },
    btnBegin:{
        position:'relative',
        zIndex:0,
        height:150,
        width:'100%',
        borderWidth:1,
        borderRadius:15,
        overflow:'hidden',
        marginVertical:5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        width:'100%',
        height:'60%',
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        backgroundColor:'brown',
        textAlign:'center'
    },
    description:{
        width:'100%',
        height:'40%',
        color:'white',
        backgroundColor:'grey',
        textAlign:'center'
    },
    redPlay:{
        position:'absolute',
        zIndex:5,
        bottom:-5,
        right:10,
        height:70,
        width:50,
    }
})