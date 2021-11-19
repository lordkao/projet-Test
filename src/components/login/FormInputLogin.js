import React from "react";
import { Text, TextInput, View, StyleSheet } from 'react-native';

const FormInputLogin = () => {

    const styles = StyleSheet.create({
        container:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            marginTop:150
        }, 
        headingInput:{
            color:'white',
            fontSize: 28,
            fontWeight:'900',
        },
        input:{
        fontSize:16,
        marginTop:10,
        backgroundColor:'white',
        width:'75%',
        textAlign:'center',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        },
    })

    return(
        <View style={styles.container}>
            <Text style={styles.headingInput}>IDENTIFIER-VOUS</Text>{/*Titre du formulaire*/}

            <TextInput style={styles.input} placeholder='Identifiant'/>{/*Input de l'identifiant client*/}
            <TextInput style={styles.input} placeholder='Mot de passe'/>{/*Input de mot de passe*/}
        </View>
    )
}

export default FormInputLogin;