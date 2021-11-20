import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginPage from './src/components/login/Login';

const UlteamProject = () => {

  /*Tous les states de l'application*/
  const [showLogin,setShowLogin] = useState(true)/*Variable d'état qui définit l'affichage de la page de connexion*/
  const [userName,setUserName] = useState('')/*Variable d'état qui va contenir l'identifiant'*/
  const [password,setPassword] = useState('')/*Variable d'état qui va contenir le mot de passe*/
  const[connected,setConnected] = useState(false)/*Variable d'état qui définit l'état de connexion*/
  const [responseRequest,setResponseRequest] = useState('')/*Variable d'état qui va contenir la clé JWT*/

  /*Tous les useEffect pour vérification*/
  useEffect(() => {/*Indique la valeur Booléenne de "connected" à chaque changement de celui-ci*/
    console.log('connected Value ==> '+connected)
  },[connected])

  useEffect(() => {/*Envoi dans la console le JWT reçu à chaque setting de "responseRequest"*/
    console.log('JWT ==> '+responseRequest)
  },[responseRequest])

  useEffect(() => {/*Envoi dans la console l'identifiant*/
    console.log('Voici le username renseigné par l\'utilisateur : '+userName)
  },[userName])

  useEffect(() => {/*Envoi dans la console le password renseigné*/
      console.log('Voici le mot de passe renseigné : '+password)
  },[password])

  return (
    <View style={styles.container}>

      {showLogin&& /*La page de connexion s'affiche si showLogin est TRUE*/
        <LoginPage
        responseRequest={responseRequest}
        setResponseRequest={setResponseRequest}
        connected={connected}
        setConnected={setConnected}
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        setShowLogin={setShowLogin}
      />
      }

    </View>
  );
}

export default UlteamProject;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },  
})