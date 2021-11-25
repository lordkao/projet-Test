import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'

const ItemCarouselSimple = ({item ,index, currentIndex}) => {
    return (
        <View style={styles.styleContainer}>
            <TouchableOpacity 
                style={styles.btnNew} 
                activeOpacity={0.7}
            >
                <Image 
                    style={
                        currentIndex === index?
                        [styles.styleImage,styles.active] 
                        : 
                        styles.styleImage
                    } 
                    source={item.image}
                />
                
            </TouchableOpacity>
        </View>
    )
}

export default ItemCarouselSimple

const styles = StyleSheet.create({
    styleContainer: {
        height: 160,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        marginTop:15,
    },
    btnNew:{
        width:250,
        justifyContent:'center',
        alignItems:'center',
    },
    styleImage: {
        resizeMode:'cover',
        height: 130,
        width:'100%',
        borderRadius:10,
    },
    active:{
        height:'100%',
    },
})