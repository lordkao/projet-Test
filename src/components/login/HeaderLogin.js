import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import Logo from '../../assets/ulteamtv.png'

const HeaderLogin = () => {

    const headingTitle = 'Plateforme Vidéo'
    const headingQuote = 'Sport,bien-être & prévention santé'

    const styles = StyleSheet.create({
        headerContainer:{
            position:'absolute',
            top:20,
            alignItems:'center',
            justifyContent:'center'
        },
        headingTitle:{
            color:'white',
            marginTop:5,
            fontSize: 26,
            fontWeight: '900',
        },
        headingQuote:{
            color:'white',
            fontSize:16
        }
    })
    
    return(
        <View style={styles.headerContainer}>
            <Image source={Logo}/>
            <Text style={styles.headingTitle}>{headingTitle}</Text>
            <Text style={styles.headingQuote}>{headingQuote}</Text>
        </View>
    )
}

export default HeaderLogin;