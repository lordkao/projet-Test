import React,{ useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './accueil/Home';
import FixedMenu from './fixedMenu/FixedMenu';

const HomePage = ({jwt,isLoading,dataCategories}) => {

    const [activeTab,setActiveTab] = useState(0)/*Variable d'état qui définit quel page afficher*/

    function switchTab(value){/*Fonction qui affiche la page selon l'onglet sélectionné*/
        if(value === 0){
            return (
                <Home 
                    jwt={jwt}
                    isLoading={isLoading}
                    dataCategories={dataCategories}
                />
            )
        }
        else if(value === 1){
            return null
        }
        else if(value === 2){
            return (
                <Home 
                    jwt={jwt}
                    isLoading={isLoading}
                    dataCategories={dataCategories}
                />
            )
        }
    }

    return(
        <View style={[styles.homePage]}>

            {/*Menu de navigation*/}
            <View style={[styles.fixedMenu]}>
                <FixedMenu
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </View>
            
            {/*Contenu principale affiché*/
                switchTab(activeTab)
            }
            

        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    homePage:{
        position:'relative',
        zIndex:0,
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    fixedMenu:{
        position:'absolute',
        zIndex:100,
        top:0,
        height:120,
        width:'100%',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
})