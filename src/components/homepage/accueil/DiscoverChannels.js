import React, { useRef,useState,useEffect } from 'react'
import { StyleSheet, Text, View, VirtualizedList, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from '../../Carousel'

const DiscoverChannels = ({ isLoading, dataChannels}) => {

    function copyData(newArray,iteration,currentArray){/*Fonction qui permet de recopier les données dans un tableau*/
        for(let i = 0 ; i < iteration; i++){
            if(newArray.length === 10){
                return 0
            }
            else if(currentArray[i]){
                newArray.push(currentArray[i])
                console.log('success'+ i)
            }
        }
    }

    const channelSport = []
    const channelBienetre = []
    const channelOrganisation = []
    const channelSante = []
    copyData(channelSport,60,dataChannels[0])
    copyData(channelBienetre,60,dataChannels[1])
    copyData(channelOrganisation,60,dataChannels[2])
    copyData(channelSante,60,dataChannels[3])
    console.log('longueur du tableau'+channelOrganisation.length)

    return(
        isLoading?
            <View>
                <Text>Chargement en cours...</Text>
            </View>
            :
            <View style={styles.discoverChannels}>
                <Text style={styles.headingTitle}>DÉCOUVREZ NOS CHAÎNES</Text>
                <View style={styles.categoryFrame}>
                    <Text style={styles.channelName}>Sport</Text>
                    <Carousel data={channelSport}/>
                </View>

                <View style={styles.categoryFrame}>
                    <Text style={styles.channelName}>Bien-être</Text>
                    <Carousel data={channelBienetre}/>
                </View>

                <View style={styles.categoryFrame}>
                    <Text style={styles.channelName}>Organisation</Text>
                    <Carousel data={channelOrganisation}/>
                </View>
            
               {/* <View style={styles.categoryFrame}>
                    <Text style={styles.channelName}>Santé</Text>
                    <Carousel data={channelSante}/>
                </View> 
                */}

            </View>
    )
}

export default DiscoverChannels

const styles = StyleSheet.create({
    discoverChannels:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:100,
        marginTop:20
    },
    categoryFrame:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    channelName:{
        color:'white',
        opacity:0.5,
        letterSpacing:1,
        fontSize:40,
        fontWeight:'900',
        marginBottom:10,
        textAlignVertical:'center',
    },
    headingTitle:{
        fontSize:22,
        fontWeight:'900',
        color:'white',
        letterSpacing:0.5,
        textAlignVertical:'center',
    },
})