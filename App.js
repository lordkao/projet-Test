import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginPage from './src/components/login/Login';

const UlteamProject = () => {

  return (
    <View style={styles.container}>

      <LoginPage/>

    </View>
  );
}

export default UlteamProject;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },  
})