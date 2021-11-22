import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Loader from "../../Loader";

const DiscoverCategories = ({isLoading,dataCategories}) => {


    return(
        <View style={styles.discoverContainer}>
            {
                isLoading?
                        /*Logo de chargement en attente de recevoir les données*/
                        <Loader/>
                    :
                        /*Boucle dans dataCategories pour créer un bouton de chaque categorie*/
                        dataCategories.map((category,index)=>{
                            return(
                                <View key={category.id+'-'+index} style={styles.discoverFrame}>
                                    <TouchableOpacity
                                        style={styles.btnCategory}
                                        activeOpacity={0.7}
                                    >
                                        <Image 
                                            source={{uri:category.illustrationUrl}} 
                                            style={styles.imageContainer}
                                        />
                                        <Text style={styles.title}>
                                            {category.name}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
            }
        </View>
    )
}

export default DiscoverCategories;

const styles = StyleSheet.create({
    discoverContainer:{
        height:'100%',
        width:'100%',
        paddingHorizontal:10,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    btnCategory:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    discoverFrame:{
        position:'relative',
        zIndex:0,
        height:'50%',
        width:'50%',
        padding:3,
        borderRadius:25,
        overflow:'hidden',
    },
    title:{
        zIndex:5,
        fontWeight:'900',
        fontSize:26,
        letterSpacing:1,
        color:'white',
    },
    imageContainer:{
        position:'absolute',
        zIndex:-1,
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        opacity:0.5
    }
})
