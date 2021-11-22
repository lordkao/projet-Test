import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Loader from "../../Loader";

const DiscoverHealth = ({isLoading,dataPrograms}) => {

    const headingTitle = 'découvrez nos programmes santé'.toUpperCase()
    console.log(dataPrograms[2].name)
    
    return(
        <View style={styles.discoverHealth}>

            {
                isLoading?

                    /*Logo de chargement en attente de recevoir les données*/
                    <Loader/>
                :
                    <View style={styles.discoverHealthContainer}>

                        {/*Titre programme santé*/}
                        <Text style={styles.headingTitleHealth}>{headingTitle}</Text>


                        <View style={styles.frameLessons}>


                            {/*Cadre de gauche*/}
                            <View style={[styles.frameContainer,{position:'relative'}]}>
                                {/*Image de fond*/}
                                <Image 
                                    style={styles.backgroundImageFrame} 
                                    source={{uri:dataPrograms[0].illustrationUrl}}
                                />
                                {/*Titre du programme*/}
                                <Text style={styles.lessonTitle}>
                                    {dataPrograms[0].name}
                                </Text>
                                {/*Bouton pour démarrer le cours*/}
                                <TouchableOpacity style={styles.frameBtn}>
                                    <Text style={styles.frameBtnContent}>Démarrer</Text>
                                </TouchableOpacity>
                            </View>


                            {/*Cadre de droite*/}
                            <View style={[styles.frameContainer,{justifyContent:'space-between'}]}>

                                <View style={styles.frameLeft}>
                                    <Image 
                                        style={styles.backgroundImageFrame} 
                                        source={{uri:dataPrograms[1].illustrationUrl}}
                                    />
                                    {/*Titre du programme*/}
                                    <Text style={styles.lessonTitle}>{dataPrograms[1].name}</Text>
                                    {/*Bouton pour démarrer le cours*/}
                                    <TouchableOpacity style={styles.frameBtn}>
                                        <Text style={styles.frameBtnContent}>Démarrer</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.frameLeft}>
                                    <Image 
                                        style={styles.backgroundImageFrame} 
                                        source={{uri:dataPrograms[2].illustrationUrl}}
                                    />
                                    {/*Titre du programme*/}
                                    <Text style={styles.lessonTitle}>{dataPrograms[2].name}</Text>
                                    {/*Bouton pour démarrer le cours*/}
                                    <TouchableOpacity style={styles.frameBtn}>
                                        <Text style={styles.frameBtnContent}>Démarrer</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>


                        </View>


                        {/*Bouton qui affiche tous les programmes*/}
                        <View style={styles.btnAllProgramsContainer}>
                            <TouchableOpacity style={styles.btnAllPrograms}>
                                <Text style={styles.btnContent}>Voir tous les programmes</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
            }

        </View>
    )
}

export default DiscoverHealth;

const styles = StyleSheet.create({
    discoverHealth:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    discoverHealthContainer:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    headingTitleHealth:{
        color:'white',
        fontSize:18,
        fontWeight:'900',
        letterSpacing:0.5,
        textAlign:'center',
        marginVertical:20,
    },
    btnAllProgramsContainer:{
        paddingHorizontal:20,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15
    },
    btnAllPrograms:{
        width:'100%',
        backgroundColor:'red',
        paddingVertical:10,
        borderRadius:8,
    },
    btnContent:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center'
    },
    frameLessons:{
        flex:1,
        flexDirection:'row',
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
    frameContainer:{
        flex:1,
        height:'100%',
        marginHorizontal:5,
        borderRadius:10,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
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
    frameLeft:{
        height:'48%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        overflow:'hidden'
    },
})