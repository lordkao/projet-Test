import React,{ useState,useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './accueil/Home';
import FixedMenu from './fixedMenu/FixedMenu';
import config from '../../../config'

const HomePage = ({jwt}) => {

    const [activeTab,setActiveTab] = useState(0)/*Variable d'état qui définit quel page afficher*/
    const [isLoading,setIsLoading] = useState(true)/*Si True dataCagories,dataChannels et dataPrograms ne sont pas prêtes sinon la valeur passe à False*/
    const [dataCategories,setDataCategories] = useState([])/*Contient un array des catégories*/
    const [dataChannels,setDataChannels] = useState([])/*Contient un array des chaînes*/
    const [dataPrograms,setDataPrograms] = useState([])/*Contient un array des programmes*/
    const[dataBegin,setDataBegin] = useState([])/*Contient un array des cours en moins de 15 min*/
    const[isLoadingBegin,setIsLoadingBegin] = useState(true)/*Si True dataBegin n'est pas prêt sinon la valeur passe à False*/

    const url= config.API_URL_MENU/*Url des catégories*/
    const urlBegin = config.API_URL_BEGIN/*Url cours en 15 min */
    const paramsGet = {/*paramètres de requête pour obtenir les categories, chaînes et programmes*/
        method:'GET',
        headers:{
            'Authorization': jwt,
            'Content-Type' : 'application/json'
        }
    }

    useEffect(() => {/*Envoi d'une requête pour obtenir les categories, chaînes et programmes*/
      fetch(url,paramsGet)
      .then((res) => res.ok&& res.json())
      .then((response) => {
        if(response.categories && response.channels && response.programs){
          setDataCategories([
            response.categories[3],
            response.categories[4],
            response.categories[5],
            response.categories[6],
          ])
          setDataChannels([
            response.channels[3],
            response.channels[4],
            response.channels[5],
            response.channels[6],
          ])
          setDataPrograms([
            response.programs[106],
            response.programs[102],
            response.programs[98],
          ])
        }
        else{
          alert('Les données ne sont pas arrivées !!')
        }
      })
      .catch((err) => alert('La requête s\'est mal déroulée' + err))
      .finally(() => setIsLoading(false))
  },[])

     useEffect(() => {
        fetch(urlBegin,paramsGet)
        .then(res => res.ok&& res.json())
        .then(response =>{
            setDataBegin([
                response['hydra:member'][1],
                response['hydra:member'][2],
                response['hydra:member'][3],
                response['hydra:member'][4],
                response['hydra:member'][5],
                response['hydra:member'][6],
                response['hydra:member'][7],
            ])    
        })
        .catch( err => alert(err))
        .finally(() => setIsLoadingBegin(false))
    },[])

    function switchTab(value){/*Fonction qui affiche la page selon l'onglet sélectionné*/
        if(value === 0){
            return (
                <Home 
                    jwt={jwt}
                    isLoading={isLoading}
                    dataCategories={dataCategories}
                    dataChannels={dataChannels}
                    dataPrograms={dataPrograms}
                    dataBegin={dataBegin}
                    isLoadingBegin={isLoadingBegin}
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
                    dataChannels={dataChannels}
                    dataPrograms={dataPrograms}
                    dataBegin={dataBegin}
                    isLoadingBegin={isLoadingBegin}
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