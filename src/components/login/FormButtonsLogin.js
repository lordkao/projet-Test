import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const FormButtonsLogin = () => {

    const styles= StyleSheet.create({
        container:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
        },
        textBtn:{
            color:'white',
            fontSize:16,
            fontWeight:'bold',
            letterSpacing:0.5,
        },
        btnConnect:{
            backgroundColor:'red'
        },
        btnSignup:{
            backgroundColor:'#5e78b3'
        },
        btn:{
            marginTop:25,
            padding:10,
            borderRadius:5,
            alignItems:'center',
            width:'80%',
        }
    })

    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.btnConnect,styles.btn]} activeOpacity={0.5}>{/*Bouton de connexion*/}
                <Text style={styles.textBtn}>Connexion</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btnSignup,styles.btn]} activeOpacity={0.5}>{/*Bouton d'inscription*/}
                <Text style={styles.textBtn}>Première connexion ?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FormButtonsLogin;