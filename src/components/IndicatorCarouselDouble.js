import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'

const Indicator = ({ icon, side, currentIndex ,setCurrentIndex, dataLength}) => {

    const prev = () => {
        if((currentIndex === 0)||((currentIndex-2)< 0)){

            if((dataLength-1)%2 === 1 ){/*Retourne un index paire si l'index maximum est impaire*/
                setCurrentIndex((dataLength-1) -1)
                console.log('impaire')
            }
            else if((dataLength-1)%2 === 0 ){/*Retourne le dernier index si celui-ci est paire*/
                console.log('paire')
                setCurrentIndex(dataLength-1)
            }
        }
        else{
            setCurrentIndex(currentIndex-2)
        }
    }
    const next = () => {
        if((currentIndex+2) > dataLength-1){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex(currentIndex+2)
        }
    }

    return (
        <View style={styles.container}>
            {/*Indicateur*/}
            <TouchableOpacity 
                style={[
                        styles.indicators,
                        side? styles.left : styles.right
                    ]}
                onPress={() => side? prev() : next()}
            >
                <Image style={styles.imageIndicators} resizeMode='contain' source={icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default Indicator

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    indicators:{
        position:'absolute',
        zIndex:5,
        height:'100%',
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
    },
    left:{
        left:-40,
        alignItems:'flex-start'
    },
    right:{
        right:-40,
        alignItems:'flex-end'
    },
    imageIndicators:{
        height:30,
        width:20,
    }
})
