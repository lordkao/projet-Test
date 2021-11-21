import React from "react";
import { Text, View, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import ProgramsImage from '../../../assets/home/programs.png';
import ChannelsImage from '../../../assets/home/channels.png';
import RedPlayIcon from '../../../assets/home/redplay.png';

const HeaderHome = () => {
    return(
        <View style={styles.headerHome}>

            <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            >
                <ImageBackground 
                    style={styles.frameImage} 
                    source={ProgramsImage}
                />
                <Image 
                    style={styles.redPlay} 
                    source={RedPlayIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            >
                <ImageBackground 
                    style={styles.frameImage} 
                    source={ChannelsImage}
                />
                <Image 
                    style={styles.redPlay} 
                    source={RedPlayIcon}
                />
            </TouchableOpacity>

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
    button:{
        position:'relative',
        flex:1,
        margin:5,
        borderRadius:20,
        backgroundColor:'white'
    },
    frameImage:{
        flex:1,
        backgroundColor:'black',
        borderRadius:20,
        overflow:'hidden'
    },
    redPlay:{
        position:'absolute',
        zIndex:5,
        top:'85%',
        height:70,
        width:70,
    },
})