import React from "react";
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Menu from '../../assets/home/menu.png';
import Search from '../../assets/home/search.png'
import Logo from '../../assets/ulteamtv.png'
import TopMenu from "./TopMenu";

const HeadingMenu = () => {
    return(
        <View style={styles.headingMenu}>
            <View style={styles.topMenu}>
                <TopMenu/>
            </View>
            <View style={styles.btnContainer}>

                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.button}>
                        <Text style={styles.btnValue}>Accueil</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.button}>
                        <Text style={styles.btnValue}>Chaînes</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.button}>
                        <Text style={styles.btnValue}>Programmes</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HeadingMenu;

const styles= StyleSheet.create({
    headingMenu:{
        flex:1,
        width:'100%',
        backgroundColor:'#000629',
        justifyContent:'center',
        alignItems:'center'
    },
    topMenu:{
        height:'50%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    btnContainer:{ 
        height:'50%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:15,
    },
    btnValue:{
        opacity:0.7,
        color:'white',
        fontSize:20
    },
})