import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

const IndicatorCarousel = ({ icon, side, fonction }) => {
    return (
        <TouchableOpacity 
            style={[
                styles.btnFlastList,
                side?/*Si True renvoi le style pour un sens à gauche sinon à droite*/
                    styles.left : styles.right
            ]}
            onPress={() => fonction()}
        >
            <Image 
                source={icon}
                style={styles.btnImage}
                resizeMode='contain'
            />
        </TouchableOpacity>
    )
}

export default IndicatorCarousel

const styles = StyleSheet.create({
    flatListContainer:{
        position:'relative',
        flex:1,
        width:'100%',
    },
    left:{
        left:0,
        alignItems:'flex-start'
    },
    right:{
        right:0,
        alignItems:'flex-end'
    },
    btnFlastList:{
        position:'absolute',
        zIndex:5,
        height:'100%',
        width:100,
        paddingHorizontal:10,
        justifyContent:'center',
    },
    btnImage:{
        height:30,
        width:30,
    }
})
