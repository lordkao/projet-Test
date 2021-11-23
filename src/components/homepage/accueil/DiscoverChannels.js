import React, { useRef,useState,useEffect } from 'react'
import { StyleSheet, Text, View, VirtualizedList, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from '../../Carousel'

const DiscoverChannels = ({ isLoading, dataChannels}) => {

    const [copied,setCopied] = useState(false)

    function copyData(value){/*Fonction qui permet de recopier les données dans un tableau*/
        for(let i = 0 ; i < value; i++){
            if(dataChannels[0][i]){
                channelSport.push(dataChannels[0][i])
                console.log('success'+ i)
            }
        }
    }

    const channelSport = []
    copyData(50)
    console.log(channelSport[0].name)

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