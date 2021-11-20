import React, { useEffect, useState } from 'react';
import { Text, ImageBackground, Image, View, StyleSheet } from 'react-native';
import LoginImage from '../../assets/login-page.png';
import FormButtonsLogin from './FormButtonsLogin';
import FormInputLogin from './FormInputLogin';
import FooterList from './FooterList';
import HeaderLogin from './HeaderLogin';

const LoginPage = () => {

  const[connected,setConnected] = useState(false)
  const [responseRequest,setResponseRequest] = useState('')/*Variable d'état qui va contenir la clé JWT*/

  useEffect(() => {/*Indique la valeur Booléenne de "connected" à chaque changement de celui-ci*/
    console.log('connected Value ==> '+connected)
  },[connected])

  useEffect(() => {/*Envoi dans la console le JWT reçu à chaque setting de "responseRequest"*/
    console.log('JWT ==> '+responseRequest)
  },[responseRequest])


  return (
    <View style={styles.container}>
      <ImageBackground
        source={LoginImage}
        style={styles.imageBackground}
      >{/*Image de fond*/}

        <HeaderLogin/>{/*En-tête de la page de connexion*/}
        
        <FormInputLogin/>{/*Inputs de connexion*/}

        <Text style={styles.forgetPass}>J'ai oublié mon mot de passe</Text>{/*lien pour récupérer un mot de passe*/}

        <FormButtonsLogin 
          setResponseRequest={setResponseRequest}
          connected={connected}
          setConnected={setConnected}
        />{/*Boutons de connexion*/}

        <FooterList/>{/*Liste des liens de règlementations*/}

        <View style={styles.tintPage}/>

      </ImageBackground>
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container:{
    flex:1,
    position:'relative',
    zIndex:0,
  },  
  imageBackground:{
    zIndex:1,
    height:'110%',
    width:'100%',
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  forgetPass:{
    zIndex:5,
    marginTop:15,
    fontSize:14,
    color:'white',
    textDecorationLine:'underline',
  },
  tintPage:{
    position:'absolute',
    zIndex: 2,
    height:'100%',
    width:'100%',
    backgroundColor:'#000629',/*#000629*/
    opacity:0.2
  },
})