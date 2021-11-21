import React from "react";
import { View, StyleSheet } from 'react-native';
import TabMenu from "./TabMenu";
import TopMenu from "./TopMenu";

const FixedMenu = () => {
    return(
        <View style={styles.FixedMenu}>

            {/*Partie top du menu de navigation*/}
            <View style={styles.menuContainer}>
                <TopMenu/>
            </View>

            {/*Partie onglets de navigation*/}
            <View style={styles.menuContainer}>
                <TabMenu/>
            </View>
        </View>
    )
}

export default FixedMenu;

const styles= StyleSheet.create({
    FixedMenu:{
        flex:1,
        width:'100%',
        backgroundColor:'#000629',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#666e9d',
    },
    menuContainer:{ 
        height:'50%',
        width:'100%',
    },
})