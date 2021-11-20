import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import Logo from '../../assets/ulteamtv.png'

const HeaderLogin = () => {

    const headingTitle = 'Plateforme Vidéo'
    const headingQuote = 'Sport, bien-être & prévention santé'

    return(
        <View style={styles.headerContainer}>
            <Image source={Logo}/>
            <Text style={styles.headingTitle}>{headingTitle}</Text>
            <Text style={styles.headingQuote}>{headingQuote}</Text>
        </View>
    )
}

export default HeaderLogin;

const styles = StyleSheet.create({
    headerContainer:{
        zIndex:5,
        position:'absolute',
        top:5,
        alignItems:'center',
        justifyContent:'center'
    },
    headingTitle:{
        height:30,
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        marginTop:0,
        fontSize: 26,
        fontWeight: '900',
        letterSpacing:0.2
    },
    headingQuote:{
        color:'white',
        fontSize:16,
        letterSpacing:0.2,
    }
})