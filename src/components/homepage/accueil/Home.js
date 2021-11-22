import React from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import HeaderHome from "./HeaderHome";
import News from "./News";

const Home = () => {
    return(
        <ScrollView style={styles.scrollView}>

            {/*Header de la homePage*/}
            <View style={[styles.headerHomePage]}>
                <HeaderHome/>
            </View>

            {/*Nouveautés de la homePage*/}
            <View style={[styles.news]}>
                <News/>
            </View>

            {/*Découverte des chaînes de la homePage*/}
            <View style={[styles.newsHomePage]}>
                <Text style={[styles.newsHomePageContainer]}>
                    Découvrez nos catégories !!
                </Text>
            </View>

            {/*Boutons favoris et reprendre*/}
            <View style={[styles.newsHomePage]}>
                <Text style={[styles.newsHomePageContainer]}>
                    Boutons favoris et reprendre !!
                </Text>
            </View>
            {/*Section bien-être en moins de 15min*/}
            <View style={[styles.newsHomePage]}>
                <Text style={[styles.newsHomePageContainer]}>
                    Votre bien-être en moins de 15min !!
                </Text>
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
})