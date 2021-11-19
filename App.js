import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginPage from './src/components/login/Login';

const UlteamProject = () => {

  const styles = StyleSheet.create({
    container:{
      flex:1,
      position:'relative',
      zIndex:0,
    },  
  })

  return (
    <View style={styles.container}>

      <LoginPage/>

    </View>
  );
}

export default UlteamProject;