import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const FooterList = () => {

    const arrayLinks = ['Mentions légales','Politiques de confidentialité','Conditions générales']

    return(
        <View style={styles.container}>
            {arrayLinks.map( (link,index) =>
                <Text style={styles.link} key={index}>{link}</Text>
            )}
        </View>
    )
}

export default FooterList;

const styles= StyleSheet.create({
    container:{
        zIndex:5,
        width:'100%',
        marginTop:30,
        marginBottom:0,
        justifyContent:'center',
        alignItems:'center',
        /*backgroundColor:'brown'*/
    },
    link:{
        marginTop:5,
        color:'white',
        textDecorationLine:'underline',
        textAlign:'center'
    }
})