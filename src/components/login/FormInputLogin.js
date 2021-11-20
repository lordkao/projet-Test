import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const FormInputLogin = ({
    userName,
    setUserName,
    password,
    setPassword
}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.headingInput}>IDENTIFIEZ-VOUS</Text>{/*Titre du formulaire*/}

            {/*Input de l'identifiant client*/}
            <TextInput 
                style={styles.input} 
                placeholder='Identifiant'
                onChangeText={setUserName}
                value={userName}
            />
            
            {/*Input de mot de passe*/}
            <TextInput 
                style={styles.input} 
                placeholder='Mot de passe'
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
        </View>
    )
}

export default FormInputLogin;

const styles = StyleSheet.create({
    container:{
        zIndex:5,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'95%',
       /*backgroundColor:'yellow'*/
    }, 
    headingInput:{
        color:'white',
        fontSize: 28,
        fontWeight:'900',
    },
    input:{
    fontSize:16,
    marginTop:20,
    backgroundColor:'white',
    width:'75%',
    textAlign:'center',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    },
})