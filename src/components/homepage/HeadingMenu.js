import React from "react";
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HeadingMenu = () => {
    return(
        <View style={styles.headingMenu}>
            <View>
                
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
        width:'90%',
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    btnContainer:{
        flexDirection:'row'
    },
    button:{
        padding:10,
        backgroundColor:'blue'
    },
    btnValue:{
        color:'white',
        fontSize:20
    },
})