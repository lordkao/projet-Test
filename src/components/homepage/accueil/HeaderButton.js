import React from 'react'
import { StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import RedPlayIcon from '../../../assets/home/redplay.png';

const HeaderButton = ({ background }) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            >
                <ImageBackground 
                    style={styles.frameImage} 
                    source={background}
                    resizeMode='stretch'
                />
                <Image 
                    style={styles.redPlay} 
                    source={RedPlayIcon}
                />
            </TouchableOpacity>
    )
}

export default HeaderButton

const styles = StyleSheet.create({
    button:{
        position:'relative',
        flex:1,
        margin:5,
        borderRadius:20,
        backgroundColor:'white'
    },
    frameImage:{
        flex:1,
        width:'100%',
        backgroundColor:'black',
        borderRadius:20,
        overflow:'hidden'
    },
    redPlay:{
        position:'absolute',
        zIndex:5,
        top:'85%',
        height:70,
        width:70,
    },
})
