import React from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import BeginNow from "./BeginNow";
import ButtonsHome from "./ButtonsHome";
import DiscoverCategories from "./DiscoverCategories";
import HeaderHome from "./HeaderHome";
import News from "./News";

const Home = ({jwt,isLoading,dataCategories}) => {
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
            {/*Section bien-être en moins de 15min*/}
            <View style={[styles.beginNow]}>
                <BeginNow
                    jwt={jwt}
                />
            </View>

            {/*Découverte du programme santé*/}
            <View style={[styles.newsHomePage]}>
                <Text style={[styles.newsHomePageContainer]}>
                    Découvrez nos programmes santé
                </Text>
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
        height:220,
        marginTop:10,
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
        height:380,
        marginTop:20,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttons:{
        height:120,
        marginTop:20,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    beginNow:{
        width:30,
        marginTop:20,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
})