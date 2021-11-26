import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ItemFastBegin from "./ItemFastBegin";

const BeginNow= ({ dataBegin }) => {

    const headingTitle = 'votre bien-être en moins de 15mn'.toUpperCase()

    return(
        <View style={styles.beginContainer}>

            {/*Titre du composant*/}
            <Text style={styles.headingTitle}>{headingTitle}</Text>

            {   
                /*Boucle dans dataBegin pour créer un boutton à chaque itération*/
                dataBegin.map( (lesson,index)=>{
                    return (
                        <ItemFastBegin array={lesson} index={index}/>
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
        marginTop:20,
    },
    headingTitle:{
        color:'white',
        fontSize:20,
        fontWeight:'800',
        textAlign:'center',
        marginBottom:15
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