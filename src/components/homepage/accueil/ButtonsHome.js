import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import WhiteHeart from '../../../assets/home/white-heart.png';
import Loader from '../../../assets/loader.png'

const ButtonsHome = () => {
    return(
        <View style={styles.buttonsContainer}>
            {/*Boutons favoris*/}
            <TouchableOpacity
                style={[styles.button,styles.favorites]}
                activeOpacity={0.7}
            >
                <Image style={styles.image} source={WhiteHeart}/>
                <Text style={styles.buttonText}>
                    Mes favoris
                </Text>
            </TouchableOpacity>
            {/*Boutons reprendre*/}
            <TouchableOpacity
                style={[styles.button,styles.continue]}
                activeOpacity={0.7}
            >
                <Image style={styles.image} source={Loader}/>
                <Text style={styles.buttonText}>
                    Reprendre
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default ButtonsHome;

const styles = StyleSheet.create({
    buttonsContainer:{
        width:'100%',
        height:120,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        height:70,
        width:'46%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        borderRadius:20,
    },
    favorites:{
        backgroundColor:'#39489f',
        marginRight:4
    },
    continue:{
        backgroundColor:'#7079b1',
        marginLeft:4
    },
    buttonText:{
        fontSize:20,
        color:'white',
        fontWeight:'900',
    },
    image:{
        width:30,
        height:30,
        marginRight:10
    }
})