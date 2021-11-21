import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import HomeIcon from '../../../assets/home/home.png'
import ChannelIcon from '../../../assets/home/channel.png'
import ProgramIcon from '../../../assets/home/program.png'

const TabMenu = ({activeTab,setActiveTab}) => {

    const tabArray = [
        {
            channel:'ACCUEIL',
            icon:HomeIcon
        },
        {
            channel:'CHAÎNES',
            icon:ChannelIcon
        },
        {
            channel:'PROGRAMMES',
            icon:ProgramIcon
        }
    ]

    return(
        <View style={styles.btnMenuContainer}>

            {/*Boucle dans le tabArray pour afficher les différents onglets*/
                tabArray.map( (tab,index) => {
                    /*Retourne un bouton correspondant aux différents onglets*/
                    return(
                        <TouchableOpacity 
                            key={tab+'-'+index} 
                            style={styles.btnContainer}  
                            onPress={()=> { setActiveTab(index)}} 
                            activeOpacity={0.7}
                        >
                            
                            <Image 
                                style={
                                    activeTab === index?/*Rajout de la classe 'opacite' selon activeTab*/
                                        [styles.btnImage,{opacity:1}] : styles.btnImage
                                } 
                                resizeMode='contain' 
                                source={tab.icon}
                            />

                            <View style={styles.button}>
                                <Text 
                                    style={
                                        activeTab === index?/*Rajout de la classe 'opacite' selon activeTab*/
                                            [styles.btnValue,{opacity:1}] : styles.btnValue
                                    }
                                >
                                    {tab.channel/*Nom de l'onglet*/}
                                </Text>
                            </View>

                            {   /*Underline de l'onglet sélectionné*/
                                activeTab === index&& 
                                    <View style={styles.after}/>
                            }

                        </TouchableOpacity>
                    )
                })
            }

        </View>
    )
}

export default TabMenu;

const styles= StyleSheet.create({
    btnMenuContainer:{ 
        height:'100%',
        paddingHorizontal:30,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
    },
    btnContainer:{
        position:'relative',
        zIndex:0,
        justifyContent:'center',
        alignItems:'center',
    },
    btnImage: {
        opacity:0.3,
        height:20,
        width:20,
    },  
    button:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:5,
        paddingHorizontal:15,
    },
    after:{
        position:'absolute',
        zIndex:1,
        bottom:-2,
        height:1,
        width:'100%',
        borderColor:'#666e9d',
        borderWidth:2,
        borderRadius:5
    },
    btnValue:{
        opacity:0.3,
        color:'white',
        fontSize:18
    },
    opacity:{
        opacity:1,
    }
})