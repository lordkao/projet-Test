import React from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';
import LoginImage from '../../assets/login-page.png';
import FormButtonsLogin from './FormButtonsLogin';
import FormInputLogin from './FormInputLogin';
import FooterList from './FooterList';

const LoginPage = () => {

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
      marginTop:15,
      fontSize:14,
      color:'white',
      textDecorationLine:'underline',
    },
    voile:{
      position:'absolute',
      zIndex: 2,
      top: '98%',
      height:'100%',
      width:'100%',
      backgroundColor:'black',
    },
    
  })

  return (
    <View style={styles.container}>
      <ImageBackground
        source={LoginImage}
        style={styles.imageBackground}
      >
        
        <FormInputLogin/>{/*Inputs de connexion*/}

        <Text style={styles.forgetPass}>J'ai oublié mon mot de passe</Text>{/*lien pour récupérer un mot de passe*/}

        <FormButtonsLogin/>{/*Boutons de connexion*/}

        <FooterList/>{/*Liste des liens de règlementations*/}
        
      </ImageBackground>

      <View style={styles.voile}/>

    </View>
  );
}

export default LoginPage;