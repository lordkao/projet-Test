import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const FooterList = () => {

    const arrayLinks = ['Mentions légales','Politiques de confidentialité','Conditions générales']

    const styles= StyleSheet.create({
        container:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
        },
        link:{
            marginTop:15,
            color:'white',
            textDecorationLine:'underline',
            textAlign:'center'
        }
    })

    return(
        <View style={styles.container}>
            {arrayLinks.map( (link,index) =>
                <Text style={styles.link} key={index}>{link}</Text>
            )}
        </View>
    )
}

export default FooterList;