import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomePage from './src/components/homepage/HomePage';
import LoginPage from './src/components/login/Login';

const UlteamProject = () => {

  /*Tous les states de l'application*/
  const [showLogin,setShowLogin] = useState(true)/*Variable d'état qui définit l'affichage de la page de connexion*/
  const [showHomePage,setShowHomePage] = useState(false)/*Variable d'état qui définit l'affichage de la page d'accueil*/
  const [userName,setUserName] = useState('')/*Variable d'état qui va contenir l'identifiant'*/
  const [password,setPassword] = useState('')/*Variable d'état qui va contenir le mot de passe*/
  const [connected,setConnected] = useState(false)/*Variable d'état qui définit l'état de connexion*/
  const [jsonWebToken,setJsonWebToken] = useState('')/*Variable d'état qui va contenir la clé JWT*/
  
  /*Tous les useEffect pour vérification*/
  useEffect(() => {/*Indique la valeur Booléenne de "connected" à chaque changement de celui-ci*/
    console.log('connected Value ==> '+connected)
  },[connected])

  useEffect(() => {/*Envoi dans la console le JWT reçu à chaque setting de "responseRequest"*/
    console.log('JWT ==> '+jsonWebToken)
  },[jsonWebToken])

  useEffect(() => {/*Envoi dans la console l'identifiant*/
    console.log('Voici le username renseigné par l\'utilisateur : '+userName)
  },[userName])

  useEffect(() => {/*Envoi dans la console le password renseigné*/
      console.log('Voici le mot de passe renseigné : '+password)
  },[password])

  return (
    <View style={styles.container}>

      {showLogin&& /*Affichage de la page de connexion si showLogin est TRUE*/
        <LoginPage
        jsonWebToken={jsonWebToken}
        setJsonWebToken={setJsonWebToken}
        connected={connected}
        setConnected={setConnected}
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        setShowLogin={setShowLogin}
        setShowHomePage={setShowHomePage}
      />
      }
      {showHomePage&& /*Affichage de la page d'accueil' si showHomePage est TRUE*/
        <HomePage
          jwt={jsonWebToken}
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