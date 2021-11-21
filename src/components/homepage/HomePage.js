import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import FixedMenu from './fixedMenu/FixedMenu';

const HomePage = () => {
    return(
        <View style={[styles.homePage]}>

            {/*Menu de navigation*/}
            <View style={[styles.fixedMenu]}>
                <FixedMenu/>
            </View>
            {/*Contenu principale de la homePage*/}
            <ScrollView style={styles.scrollView}>

                {/*Header de la homePage*/}
                <View style={[styles.headerHomePage]}>
                    <Text style={[styles.headerHomePageContainer]}>
                        Présentation des chaînes !!
                    </Text>
                </View>

                {/*Nouveautés de la homePage*/}
                <View style={[styles.newsHomePage]}>
                    <Text style={[styles.newsHomePageContainer]}>
                        Nouveautés !!
                    </Text>
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
    scrollView:{
        backgroundColor:'orange',
        width:'100%'
    },
    headerHomePage:{
        backgroundColor:'green',
        height:180,
        marginTop:120,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    headerHomePageContainer:{
        flex:1,
        width:'90%',
        backgroundColor:'blue',
        color:'white',
        fontSize:20,
        textAlign:'center',
        textAlignVertical:'center'
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