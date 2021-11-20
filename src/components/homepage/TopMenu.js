import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';

import Menu from '../../assets/home/menu.png';
import Search from '../../assets/home/search.png'
import Logo from '../../assets/ulteamtv.png'

const TopMenu = () => {
    return(
        <View style={styles.topMenuContainer}>

            {/*Bouton menu*/}
            <TouchableOpacity style={styles.topIconMenuContainer} onPress={()=> { alert('press!!')}}>
                <Image resizeMode='contain' source={Menu} style={styles.topIcons} />
            </TouchableOpacity>
            
            {/*Bouton logo ulteamTv*/}
            <TouchableOpacity style={styles.topIconLogoContainer} onPress={()=> { alert('press!!')}}>
                <Image resizeMode='contain' source={Logo} style={styles.topIcons}/>
            </TouchableOpacity>
            
            {/*Bouton de recherche*/}
            <TouchableOpacity style={styles.topIconSearchContainer} onPress={()=> { alert('press!!')}}>
                <Image resizeMode='contain' source={Search} style={styles.topIcons}/>
            </TouchableOpacity>

        </View>
    )
}

export default TopMenu

const styles= StyleSheet.create({
    topMenuContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:5
    },
    topIconMenuContainer:{
        height:'100%',
        paddingHorizontal:10,
        width:40,
    },
    topIconLogoContainer:{
        height:'100%',
        width:130,
        marginLeft:10,
    },
    topIconSearchContainer:{
        height:'100%',
        paddingHorizontal:10,
        width:40,
    },
    topIcons:{
        height:'100%',
        width:'100%',
    },
})