import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
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

  return (
    <View style={styles.container}>
      {/*Bar de statut du smartphone*/}
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
        translucent={false}
      />

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