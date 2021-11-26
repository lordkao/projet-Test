import React from 'react'
import { StyleSheet, View } from 'react-native'

const IndicatorPageCarousel = ({ data, currentIndex}) => {
    return (
        <View style={styles.indicatorsContainer}>
            {
                data.map( (elt,index) => {
                    return (
                        index%2 === 0 && /*Un indicateur est créé seulement si son index est paire ou égale à 0*/
                            <View 
                            key={'indicator-key-'+index} 
                            style={/*Si currentIndex vaut son index alors ce composant ce color en blanc*/
                                currentIndex===index?
                                        [styles.indicators,{backgroundColor:'white'}]
                                    :
                                        styles.indicators
                            }
                        />
                    )
                })
            }
        </View>
    )
}

export default IndicatorPageCarousel

const styles = StyleSheet.create({
    indicatorsContainer:{
        height:50,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    indicators:{
        height:10,
        width:10,
        borderRadius:5,
        borderColor:'white',
        borderWidth:1,
        marginHorizontal:5,
    }
})
