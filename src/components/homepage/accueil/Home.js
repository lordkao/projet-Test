import React,{ useState,useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import config from "../../../../config";
import ButtonsHome from "./ButtonsHome";
import DiscoverCategories from "./DiscoverCategories";
import DiscoverChannels from "./DiscoverChannels";
import DiscoverHealth from "./DiscoverHealth";
import FastBegin from "./FastBegin";
import HeaderHome from "./HeaderHome";
import News from "./News";

const Home = ({jwt}) => {

    const [isLoading,setIsLoading] = useState(true)/*Si True dataCagories,dataChannels et dataPrograms ne sont pas prêtes sinon la valeur passe à False*/
    const [dataCategories,setDataCategories] = useState([])/*Contient un array des catégories*/
    const [dataChannels,setDataChannels] = useState([])/*Contient un array des chaînes*/
    const [dataPrograms,setDataPrograms] = useState([])/*Contient un array des programmes*/
    const [dataBegin,setDataBegin] = useState([])/*Contient un array des cours en moins de 15 min*/
    const [isLoadingBegin,setIsLoadingBegin] = useState(true)/*Si True dataBegin n'est pas prêt sinon la valeur passe à False*/

    const url= config.API_URL_MENU/*Url des catégories*/
    const urlBegin = config.API_URL_BEGIN/*Url cours en 15 min */
    const paramsGet = {/*paramètres de requête pour obtenir les categories, chaînes et programmes*/
        method:'GET',
        headers:{
            'Authorization': jwt,
            'Content-Type' : 'application/json'
        }
    }

    const getAll = async () => {/*Envoi d'une requête pour obtenir les categories, chaînes et programmes*/
        try{
            const response = await fetch(url,paramsGet)
            const json = await response.json()
            setDataCategories([
                json.categories[3],
                json.categories[4],
                json.categories[5],
                json.categories[6],
            ])
            setDataChannels([
                json.channels[3],
                json.channels[4],
                json.channels[5],
                json.channels[6],
            ])
            setDataPrograms([
                json.programs[106],
                json.programs[102],
                json.programs[98],
            ])
        }
        catch{(error) => console.log('La requête s\'est mal déroulée :'+error)}
        finally{setIsLoading(false)}
    }

    const getBeginLessons = async () => {
        try{
            const response = await fetch(urlBegin,paramsGet)
            const json = await response.json()
            setDataBegin([
                json['hydra:member'][1],
                json['hydra:member'][2],
                json['hydra:member'][3],
                json['hydra:member'][4],
                json['hydra:member'][5],
                json['hydra:member'][6],
                json['hydra:member'][7],
            ])  
        }
        catch{(error) => console.log('La requête s\'est mal déroulée :'+error)}
        finally{setIsLoadingBegin(false)}
    }

    useEffect(() => {/*Appel de requête pour obtenir les categories, chaînes et programmes*/
        getAll()
    },[])

     useEffect(() => {/*Appel de requête pour obtenir les cours en 15 mins*/
        getBeginLessons()
    },[])

    return(
        !isLoading && !isLoadingBegin?
            <View style={{flex:1,width:'100%'}}>
                <ScrollView style={styles.scrollView}>
                
                    {/*Header de la homePage */}
                    <View style={[styles.headerHomePage]}>
                        <HeaderHome/>
                    </View>

                    {/*Nouveautés de la homePage */}
                    <View style={[styles.news]}>
                        <News/>
                    </View>

                    {/*Découverte des chaînes de la homePage */}
                    <View style={[styles.discoverCategories]}>
                        <DiscoverCategories
                            jwt={jwt}
                            dataCategories={dataCategories}
                        />
                    </View>

                    {/*Boutons favoris et reprendre */}
                    <View style={[styles.buttons]}>
                        <ButtonsHome/>
                    </View>

                    {/*Section bien-être en moins de 15min */}
                    <View style={[styles.beginNow]}>
                        <FastBegin
                            dataBegin={dataBegin}
                        />
                    </View>

                    {/*Découverte du programme santé*/}
                    <View style={[styles.discoverHealth]}>
                        <DiscoverHealth 
                            dataPrograms={dataPrograms}
                        />
                    </View>

                    {/*Découverte des chaînes*/}
                    <View style={[styles.discoverChannels]}>
                        <DiscoverChannels
                            dataChannels={dataChannels}
                        />
                </View>

            </ScrollView>
            </View>
            :
            <View style={styles.loadingPage}>
                <Text style={styles.textWait}>Chargement en cours...</Text>
            </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    loadingPage:{
        flex:1,
        width:'100%',
        backgroundColor:'#000629',
        justifyContent:'center',
        alignItems:'center'
    },
    scrollView:{
        backgroundColor:'#000629',
        width:'100%',
        marginTop:120,
    },
    headerHomePage:{
        height:220,
        width:'100%',
        marginTop:20,
        paddingHorizontal:10,
        paddingBottom:20,
    },
    news:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    discoverCategories:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttons:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    beginNow:{
        paddingHorizontal:10,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    discoverHealth:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    discoverChannels:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    textWait:{
        color:'white',
        fontSize:24,
    }
})