import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import HomeIcon from '../../../assets/home/home.png'
import ChannelIcon from '../../../assets/home/channel.png'
import ProgramIcon from '../../../assets/home/program.png'

const TabMenu = () => {
    return(
        <View style={styles.btnMenuContainer}>
            <View style={styles.containerAbsolute}>
                <TouchableOpacity  onPress={()=> { alert('press!!')}} activeOpacity={0.7}>
                    <Image style={{opacity:0.5}} resizeMode='contain' source={HomeIcon}/>
                    <View style={styles.button}>
                        <Text style={styles.btnValue}>Accueil</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=> { alert('press!!')}} activeOpacity={0.7}>
                    <Image style={{opacity:1}} resizeMode='cover' source={ChannelIcon}/>
                    <View style={styles.button}>
                        <Text style={styles.btnValue}>Chaînes</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> { alert('press!!')}} activeOpacity={0.7}>
                    <Image style={{opacity:1}} resizeMode='contain' source={ProgramIcon}/>
                    <View style={styles.button}>
                        <Text style={styles.btnValue}>Programmes</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TabMenu;

const styles= StyleSheet.create({
    btnMenuContainer:{ 
        position:'relative',
        zIndex:0,
        height:'100%',
        width:'100%',
    },
    containerAbsolute:{
        position:'absolute',
        zIndex:1,
        top:2.5,
        left:0,
        height:'100%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:5,
        paddingHorizontal:15,
        borderBottomColor:'#666e9d',
        borderBottomWidth:5,
    },
    btnValue:{
        opacity:0.5,
        color:'#666e9d',
        fontSize:18
    },
})