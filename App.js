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
  const [isLoading,setIsLoading] = useState(true)/*Variable qui gère l'affichage du composant*/
  const [dataCategories,setDataCategories] = useState([])/*Contient un array des catégories*/
  const [dataChannels,setDataChannels] = useState([])/*Contient un array des chaînes*/


  const url='https://api-r.ulteamapp.fr/api/custom/menu'/*url des catégories*/
  const paramsGet = {/*paramètres de requête pour obtenir les categories, chaînes et programmes*/
      method:'GET',
      headers:{
          'Authorization': jsonWebToken,
          'Content-Type' : 'application/json'
      }
  }

  useEffect(() => {/*Envoi d'une requête pour obtenir les categories, chaînes et programmes*/
      fetch(url,paramsGet)
      .then((res) => res.ok&& res.json())
      .then((response) => {
        if(response.categories){
          setDataCategories([
            response.categories[3],
            response.categories[4],
            response.categories[5],
            response.categories[6],
          ])
          setDataChannels([
            response.channels[3],
            response.channels[4],
            response.channels[5],
            response.channels[6],
          ])
          setIsLoading(false)/*Set la variable isLoading à false*/
        }
        else{
          alert('Les données ne sont pas arrivées !!')
        }
      })
      .catch((err) => alert('La requête s\'est mal déroulée' + err))
  },[])



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
          isLoading={isLoading}
          dataCategories={dataCategories}
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