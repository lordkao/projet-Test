import React from "react";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import ProgramsImage from '../../../assets/home/programs.png';
import ChannelsImage from '../../../assets/home/channels.png';
import HeaderButton from "./HeaderButton";

const HeaderHome = () => {
    return(
        <View style={styles.headerHome}>

            {/*Bouton 'Nos Programmes'*/}
            <HeaderButton background={ProgramsImage}/>

            {/*Bouton 'Nos Chaînes'*/}
            <HeaderButton background={ChannelsImage}/>
            
        </View>
    )
}

export default HeaderHome;

const styles = StyleSheet.create({
    headerHome:{
        flex:1,
        width:'100%',
        flexDirection:'row',
    },
})