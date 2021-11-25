import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Frameprogram from "../../FrameProgram";
import Loader from "../../Loader";

const DiscoverHealth = ({dataPrograms}) => {

    const headingTitle = 'découvrez nos programmes santé'.toUpperCase()
    
    return(
        <View style={styles.discoverHealth}>
            {
                <View style={styles.discoverHealthContainer}>

                    {/*Titre programme santé*/}
                    <Text style={styles.headingTitleHealth}>{headingTitle}</Text>
                    <View style={styles.frameLessons}>

                        {/*Cadre de gauche*/}
                        <View style={styles.frameContainer}>
                            <Frameprogram title={dataPrograms[0].name} urlImage={dataPrograms[0].illustrationUrl}/>
                        </View>

                        {/*Cadre de droite*/}
                        <View style={[styles.frameContainer,{justifyContent:'space-between'}]}>
                            <View style={styles.frameLeft}>
                                <Frameprogram title={dataPrograms[1].name} urlImage={dataPrograms[1].illustrationUrl}/>
                            </View>
                            <View style={styles.frameLeft}>
                                <Frameprogram title={dataPrograms[2].name} urlImage={dataPrograms[2].illustrationUrl}/>
                            </View>
                        </View>
                    </View>
                    
                    {/*Bouton qui affiche tous les programmes*/}
                    <View style={styles.btnAllProgramsContainer}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.btnAllPrograms}>
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
        height:550,
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
        fontSize:20,
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
    frameContainer:{
        flex:1,
        height:'100%',
        marginHorizontal:5,
        borderRadius:10,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
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