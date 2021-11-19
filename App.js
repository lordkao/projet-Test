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
    voile:{
      position:'absolute',
      zIndex: 2,
      top: '98%',
      height:'100%',
      width:'100%',
      backgroundColor:'black',
    }
  })

  return (
    <View style={styles.container}>

      <LoginPage/>
      <View style={styles.voile}/>

    </View>
  );
}

export default UlteamProject;