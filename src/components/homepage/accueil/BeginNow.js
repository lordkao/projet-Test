import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Redplay from '../../../assets/home/redplay.png';

const BeginNow= ({jwt}) => {


    const[dataBegin,setDataBegin] = useState([])

    const paramsGetBegin = {
        method:'GET',
        headers:{
            'Authorization': jwt,
            'Content-Type': 'application/json'
        },
    }
    const urlBegin = 'https://api-r.ulteamapp.fr/api/channels?isThematique=1'

    useEffect(() => {
        fetch(urlBegin,paramsGetBegin)
        .then(res => res.ok&& res.json())
        .then(response =>{
            setDataBegin([...response['hydra:member']])
        })
        .catch( err => alert(err))
    },[jwt])

    useEffect(()=>{
        console.log(dataBegin[4].image.contentUrl)
    },[dataBegin])
    
    return(
        <View style={styles.beginContainer}>

            {
                dataBegin.map( (lesson,index)=>{

                    return (

                        <TouchableOpacity
                            key={lesson.id+index}
                            activeOpacity={0.7}
                            style={styles.btnBegin}
                        >
                            <Image 
                                style={styles.imageBackground}
                                source={{uri:lesson.image.contentUrl}}
                            />
                            <Image 
                                style={styles.redPlay}
                                source={Redplay}
                            />
                            <Text style={styles.title}>{lesson.name}</Text>{/*Titre*/}
                            <Text style={styles.description}>{lesson.content}</Text>{/*Description*/}

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
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    imageBackground:{
        position:'absolute',
        zIndex:1,
        opacity:0.4,
        height:'100%',
        width:'100%',
    },
    title:{
        width:'85%',
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        textAlign:'left',
        marginLeft:20
    },
    description:{
        width:'85%',
        color:'white',
        textAlign:'left',
        marginLeft:20
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