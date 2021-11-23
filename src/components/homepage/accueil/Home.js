import React from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import BeginNow from "./BeginNow";
import ButtonsHome from "./ButtonsHome";
import DiscoverCategories from "./DiscoverCategories";
import DiscoverHealth from "./DiscoverHealth";
import HeaderHome from "./HeaderHome";
import News from "./News";

const Home = ({jwt,isLoading,dataCategories,dataChannels,dataPrograms}) => {
    return(
        <ScrollView style={styles.scrollView}>

            {/*Header de la homePage OK*/}
            <View style={[styles.headerHomePage]}>
                <HeaderHome/>
            </View>

            {/*Nouveautés de la homePage OK*/}
            <View style={[styles.news]}>
                <News/>
            </View>

            {/*Découverte des chaînes de la homePage OK*/}
            <View style={[styles.discoverCategories]}>
                <DiscoverCategories
                    jwt={jwt}
                    isLoading={isLoading}
                    dataCategories={dataCategories}
                />
            </View>

            {/*Boutons favoris et reprendre OK*/}
            <View style={[styles.buttons]}>
                <ButtonsHome/>
            </View>
            {/*Section bien-être en moins de 15min OK*/}
            <View style={[styles.beginNow]}>
                <BeginNow
                    jwt={jwt}
                />
            </View>

            {/*Découverte du programme santé*/}
            <View style={[styles.discoverHealth]}>
                <DiscoverHealth 
                    dataPrograms={dataPrograms}
                    isLoading={isLoading}
                />
            </View>

            {/*Découverte des chaînes*/}
            <View style={[styles.newsHomePage]}>
                <Text style={[styles.newsHomePageContainer]}>
                    Découvrez nos chaînes
                </Text>
            </View>

        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
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
    newsHomePage:{
        backgroundColor:'green',
        height:180,
        marginTop:10,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    newsHomePageContainer:{
        flex:1,
        width:'90%',
        backgroundColor:'brown',
        color:'white',
        fontSize:20,
        textAlign:'center',
        textAlignVertical:'center'
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
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    discoverHealth:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    }
})