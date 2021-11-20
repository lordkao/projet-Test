import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import FormButtonsLogin from './FormButtonsLogin';
import FormInputLogin from './FormInputLogin';
import FooterList from './FooterList';
import HeaderLogin from './HeaderLogin';
import LoginImage from '../../assets/login-page.png';
import LinearGradient from 'react-native-linear-gradient';

const LoginPage = ({
  setResponseRequest,
  setConnected,
  userName,
  setUserName,
  password,
  setPassword,
  setShowLogin,
  setShowHomePage
}) => {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewContainer}
        >
          {/*Dégradé de couleur bleu*/}
          <LinearGradient colors={['transparent', '#000629']} style={styles.linearGradient}/>

          {/*Teinte qui fonce l'image en background*/}
          <View style={styles.tintPage}/>

          {/*Image de fond*/}
          <Image source={LoginImage} resizeMode='contain' style={styles.image}/>

          {/*En-tête de la page de connexion*/}
          <View style={styles.header}>
            <HeaderLogin/>
          </View>
          
          <View style={styles.formContainer}>

            {/*Inputs de connexion*/}
            <FormInputLogin
              userName={userName}
              setUserName={setUserName}
              password={password}
              setPassword={setPassword}
            />

            {/*lien pour récupérer un mot de passe*/}
            <Text style={styles.forgetPass}>J'ai oublié mon mot de passe</Text>

            {/*Boutons de connexion*/}
            <FormButtonsLogin 
              setResponseRequest={setResponseRequest}
              setConnected={setConnected}
              userName={userName}
              password={password}
              setShowLogin={setShowLogin}
              setShowHomePage={setShowHomePage}
            />

            {/*Liste des liens de règlementations*/}
            <FooterList/>
            
          </View>

        </View>
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
  scrollViewContainer:{
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
  scrollView:{
    backgroundColor:'red'
  },
  backgroundLogin:{
    position:'absolute',
    zIndex:1,
    width:'100%',
  },
  tintPage:{
    position:'absolute',
    zIndex: 1,
    height:'100%',
    width:'100%',
    backgroundColor:'#000629',/*#000629*/
    opacity:0.2
  },
  image:{
    position:'absolute',
    flex:1,
    zIndex: 1,
  },
  linearGradient: {
    position:'absolute',
    flex:1,
    zIndex: 2,
    bottom:0,
    height:'50%',
    width:'100%',
  },
})