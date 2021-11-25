import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import CarouselDouble from '../../CarouselDouble'

const DiscoverChannels = ({ dataChannels}) => {

    const copyData = (iteration,currentArray) =>{/*Fonction qui permet de recopier les données dans un tableau*/
        let array = []
        for(let i = 0 ; i < iteration; i++){
            if(array.length === 10){
                return array
            }
            else if(currentArray[i]){
                array.push(currentArray[i])
            }
        }
        return array
    }

    const channelSport = copyData(60,dataChannels[0])
    const channelBienetre = copyData(60,dataChannels[1])
    const channelOrganisation = copyData(60,dataChannels[2])
    const channelSante = copyData(60,dataChannels[3])

    return(
            <View style={styles.discoverChannels}>

                <Text style={styles.headingTitle}>DÉCOUVREZ NOS CHAÎNES</Text>

                {/*<View style={styles.categoryFrame}>
                    <Text style={styles.channelName}>Sport</Text>
                    <CarouselDouble data={channelSport}/>
                </View>

                <View style={styles.categoryFrame}>
                    <Text style={styles.channelName}>Bien-être</Text>
                    <CarouselDouble data={channelBienetre}/>
                </View>

                <View style={styles.categoryFrame}>
                    <Text style={styles.channelName}>Organisation</Text>
                    <CarouselDouble data={channelOrganisation}/>
                </View>

                <View style={styles.categoryFrame}>
                    <Text style={styles.channelName}>Santé</Text>
                    <Carousel data={channelSante}/>
                </View>*/}
            
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