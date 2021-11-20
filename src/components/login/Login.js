import React, { useEffect, useState } from 'react';
import { Text, ImageBackground, Image, View, StyleSheet, ScrollView } from 'react-native';
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
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={LoginImage}
          resizeMode='cover'
          style={styles.imageBackground}
        >{/*Image de fond*/}

          <View style={styles.header}>
            <HeaderLogin/>{/*En-tête de la page de connexion*/}
          </View>
          
          <View style={styles.formContainer}>
            <FormInputLogin/>{/*Inputs de connexion*/}

            <Text style={styles.forgetPass}>J'ai oublié mon mot de passe</Text>{/*lien pour récupérer un mot de passe*/}

            <FormButtonsLogin 
              setResponseRequest={setResponseRequest}
              connected={connected}
              setConnected={setConnected}
            />{/*Boutons de connexion*/}

            <FooterList/>{/*Liste des liens de règlementations*/}
          </View>

          <View style={styles.tintPage}/>

        </ImageBackground>
      </ScrollView>
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
    flex:1,
    zIndex:1,
    backgroundColor:'black',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  header:{
    height:120,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  formContainer:{
    height:'80%',
    width:'100%',
    justifyContent:'flex-end',
    alignItems:'center',
    /*backgroundColor:'purple'*/
  },
  forgetPass:{
    zIndex:5,
    marginTop:10,
    marginBottom:15,
    fontSize:14,
    color:'white',
    textDecorationLine:'underline',
    textAlign:'center',
    textAlignVertical:'center',
    width:'100%',
    /*backgroundColor:'blue'*/
  },
  tintPage:{
    position:'absolute',
    zIndex: 2,
    height:'100%',
    width:'100%',
    backgroundColor:'#000629',/*#000629*/
    opacity:0.2
  },
  scrollView:{
    backgroundColor:'red'
  },
})