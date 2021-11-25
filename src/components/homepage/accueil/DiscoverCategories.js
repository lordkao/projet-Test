import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Loader from "../../Loader";

const DiscoverCategories = ({dataCategories}) => {


    return(
        <View style={styles.discoverContainer}>
            <Text style={styles.headingTitle}>
                DÉCOUVREZ NOS CATÉGORIES
            </Text>

            <View style={styles.contentContainer}>
                {
                    /*Boucle dans dataCategories pour créer un bouton de chaque categorie*/
                    dataCategories.map((category,index)=>{
                        return(
                            <View key={category.id+'-'+index} style={styles.discoverFrame}>
                                <TouchableOpacity
                                    style={styles.btnCategory}
                                    activeOpacity={0.7}
                                >
                                    <Image 
                                        resizeMode='cover'
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
        </View>
    )
}

export default DiscoverCategories;

const styles = StyleSheet.create({
    discoverContainer:{
        flex:1,
        width:'100%',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },
    contentContainer:{
        height:380,
        width:'100%',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        paddingHorizontal:10,
    },
    headingTitle:{
        color:'white',
        fontWeight:'900',
        fontSize:18,
        letterSpacing:0.5,
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
        width:'49.5%',
        padding:3,
        borderRadius:25,
        overflow:'hidden',
        marginBottom:10
    },
    title:{
        zIndex:5,
        fontWeight:'900',
        fontSize:20,
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
