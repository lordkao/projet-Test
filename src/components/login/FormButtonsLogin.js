import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const FormButtonsLogin = ({setResponseRequest,setConnected,userName,password}) => {

    const urlConnect = 'https://api-r.ulteamapp.fr/api/login_check'

    const infosUser = {/*Objet qui devra être joint au body de la requête POST*/
        username : userName,
        password : password
    }

    function sendUserInputs(infos){

        const requestParams = {/*Paramètre de requête POST pour l'envoi des infos de connexion*/
        method:'POST',
        headers:{
        'Content-type':'application/json'
        },
        body:JSON.stringify(infos)
        }

        if(!infos){
            alert('Il manque des informations !!')
        }
        else{/*Envoi des inputs saisies si ceux là sont valides*/
            fetch(urlConnect,requestParams)
            .then( res => res.ok&& res.json())
            .then(responses => {
            const test = responses
            if(test.token){
                setResponseRequest('BEARER '+test.token)
                setConnected(true)
                alert('test.token vaut ==> '+test.token)
            }
            else{
                alert('Mauvaise informations saisies !!')
            }})
            .catch(err => alert('erreur : ' + err))
        }
      }

    return(
        <View style={styles.container}>

            {/*Bouton de connexion*/}
            <TouchableOpacity 
                style={[styles.btnConnect,styles.btn]} 
                activeOpacity={0.5}
                onPress={() => sendUserInputs(infosUser)}
            >
                <Text style={styles.textBtn}>Connexion</Text>
            </TouchableOpacity>

            {/*Bouton d'inscription*/}
            <TouchableOpacity style={[styles.btnSignup,styles.btn]} activeOpacity={0.5}>
                <Text style={styles.textBtn}>Première connexion ?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FormButtonsLogin;

const styles= StyleSheet.create({
    container:{
        zIndex:5,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        /*backgroundColor:'green'*/
    },
    textBtn:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        letterSpacing:0.7,
    },
    btnConnect:{
        backgroundColor:'red'
    },
    btnSignup:{
        marginTop:20,
        backgroundColor:'#5e78b3'
    },
    btn:{
        padding:12,
        borderRadius:5,
        alignItems:'center',
        width:'75%',
    }
})