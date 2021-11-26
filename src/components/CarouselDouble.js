import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Dimensions, FlatList } from 'react-native'
import Left from '../assets/left.png'
import Right from '../assets/right.png'
import IndicatorCarouselDouble from './IndicatorCarouselDouble'
import IndicatorPageCarousel from './IndicatorsPageCarousel'
import ItemCarouselDouble from './ItemCarouselDouble'
IndicatorPageCarousel

const Carousel = ({ data }) => {

    const{ width, height } = Dimensions.get('screen')
    const[currentIndex,setCurrentIndex] = useState(0)
    const imageWidth = (width-40)*0.5/*Calcul la largeur selon la taille de l'écran*/
    const imageHeight = imageWidth*1/*Calcul la heuteur selon la taille de l'écran*/
    const reflatlist = useRef()/*Copy de VirtualisedList afin de faire ressortir ses fonctionnalités */
    const length = data.length/*Longueur du tableau data*/
    
    const sizeStyle = {
        height:imageHeight,
        width:imageWidth,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5,
    }

    useEffect(()=>{/*Gère le scroll du carousel*/
        reflatlist.current.scrollToIndex({
            animated:true,
            index:currentIndex,
            viewOffset:0,
            viewPosition:0
        })
    },[currentIndex])

    const renderItem = ({item}) => (
        <ItemCarouselDouble 
            name={item.name} 
            imageUrl={item.imageUrl} 
            numberVideos={item.numberVideos} 
            sizeStyle={sizeStyle}
        />
    )
        
    return (
        <View style={styles.mainContainer}>

            <View style={styles.carouselContainer}>
                {/*Indicateur gauche*/}
                <IndicatorCarouselDouble 
                    icon={Left}
                    side={true}/*Si true le sens est à gauche sinon à droite*/
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    dataLength={length}
                />

                <FlatList
                    ref={reflatlist}
                    data={data}
                    renderItem={renderItem}
                    horizontal
                    keyExtractor={(item) => item.id}
                    pagingEnabled={false}
                    scrollEnabled={false}
                    initialNumToRender={6}
                />

                {/*Indicateur droite*/}
                <IndicatorCarouselDouble 
                    icon={Right}
                    side={false}/*Si true le sens est à gauche sinon à droite*/
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    dataLength={length}
                />

            </View>

            {/*Indicateurs de page du carousel*/}
            <View style={{height:50}}>
                <IndicatorPageCarousel data={data} currentIndex={currentIndex}/>  
            </View>

        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    carouselContainer:{
        position:'relative',
        flex:1,
        flexDirection:'row',
        marginHorizontal:20
    },
})