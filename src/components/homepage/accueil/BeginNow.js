import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import Redplay from '../../../assets/home/redplay.png';
import Loader from "../../Loader";

const BeginNow= ({jwt}) => {


    const[dataBegin,setDataBegin] = useState([])
    const[isLoading,setIsLoading] = useState(true)

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

            setDataBegin([
                response['hydra:member'][1],
                response['hydra:member'][2],
                response['hydra:member'][3],
                response['hydra:member'][4],
                response['hydra:member'][5],
                response['hydra:member'][6],
                response['hydra:member'][7],
            ])    
            setIsLoading(false)
            
        })
        .catch( err => alert(err))
    },[jwt])

    const headingTitle = 'votre bien-être en moins de 15mn'.toUpperCase()

    return(
        <View style={styles.beginContainer}>

            {/*Titre du composant*/}
            <Text style={styles.headingTitle}>{headingTitle}</Text>

            {   
                isLoading?
                    /*Logo de chargement en attente de recevoir les données*/
                    <Loader/>
                :
                    /*Boucle dans dataBegin pour créer un boutton à chaque itération*/
                    dataBegin.map( (lesson,index)=>{
                        return (
                            <TouchableOpacity key={lesson.name+index} activeOpacity={0.7} style={styles.btnBegin}>
                                <Image style={styles.imageBackground} source={{uri:lesson.image.contentUrl}}/>
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
            {/*Bouton pour voir tous les ateliers*/}
            <TouchableOpacity style={styles.btnShowAll} activeOpacity={0.7}>
                <Text style={styles.btnTextShowAll}>
                    Voir tout
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default BeginNow;

const styles = StyleSheet.create({
    beginContainer:{
        flex:1,
        width:'100%',
        paddingHorizontal:10
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
    headingTitle:{
        color:'white',
        fontSize:20,
        fontWeight:'800',
        textAlign:'center',
        marginBottom:15
    },
    title:{
        zIndex:5,
        width:'85%',
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        textAlign:'left',
        marginLeft:20
    },
    description:{
        zIndex:5,
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
    },
    btnShowAll:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:10,
        marginVertical:15
    },
    btnTextShowAll:{
        color:'white',
        fontWeight:'900',
        letterSpacing:0.5,
        fontSize:14
    }
})