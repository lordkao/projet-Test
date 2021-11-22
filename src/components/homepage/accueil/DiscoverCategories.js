import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react/cjs/react.development";

const DiscoverCategories = ({jwt}) => {

    const token='BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Mzc1NTIzNjMsImV4cCI6MTYzNzYzODc2Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoic29ubnktZGV2IiwiZW1haWwiOiJhLnBsYW5Ab3pvbmRpZ2l0YWwuY29tIiwiaWQiOjIwOTAsImZpcnN0TG9naW4iOmZhbHNlLCJob21lU3VydmV5IjpmYWxzZSwiZGVwYXJ0bWVudCI6eyJpZCI6MzM3LCJuYW1lIjoiQUNIRVRFVVIifSwicm1iS2V5IjoiZDgxOGJhYjFmMWNjNzI1OWI4ZjUzM2VjYTNiM2YzNmFiNDU2Y2I1OSIsImNvbXBhbnkiOnsiaWQiOjI3MywibmFtZSI6IlRlc3QgQXhlbCIsImxvZ28iOiJodHRwczpcL1wvYXBpLXIudWx0ZWFtYXBwLmZyXC9tZWRpYVwvY2FzcXVlLTYxNGFmOWQ1NDQwMjU3MzkxMjQ2ODguanBnIiwiY21zVGl0bGUiOiIiLCJjbXNUZXh0IjoiIiwiY21zSW1nIjpudWxsLCJjbXNDdGFUZXh0IjpudWxsLCJjbXNDdGFVcmwiOm51bGx9fQ.mSBVIegvCfLIt_9-g4g4PuAOI8rFBHIs_bo1ZdYejJVHcSsGsOwtCMAJXWlcic-AvXRZO0nIQspAjtD8ffL9ssHFDdWTZFTYzhQ5dCuYwSjHo9_qjegzHiFcxFpZcg76Myj8vaWDxd5Fq6neJmCORvU4EtYtjIYKgQH555NzYHQK2RiNesSyChJj1CpcNeuNjkQiWgMyoNq9ML3pgfcQdl08Q0kICNhZEjxWvDJhrO6pa3tlvY0qrlhBtyCS4bYNUGV88IgpxkQyH8qolIpltmYjU9ubnhpIwv4Cimd7P0SvYRXX52KVmDf70Mf3qPlTcRGxvw5ChcMosGvp8FJXgY8WeknjI_7ewaEL6Azy3QVCLzq-z1JC41UTfxyz6gT3u87gZ-GO1GE0gOBfJVG5tIFNR3z_kbZLqcwBfL9UbFiVGJqFJpN3baE50vUZREaCUYIyCbMW2ePKmp3jYY9nmcsDanULaUFT1mryRXHrMQQTpHIyJxiIp4Zye_LFgWxHeOG_QN4pXypJHD5pbjxg7VeydS3eGSwy68VztmncEnlRF2r_K6lTKsrXPt9MbqR0dKAGCHjXKiAtlN8dC8lJeehWHVGsOpu1t-jVIDxPq_URHjkVnR6t28eKZ3vJVkuN-FaCjx-mhxpB_9LyvcvZ485ha8ZJWNIhNScFjczrO1E'

    const[isLoading,setIsLoading] = useState(true)
    const[data,setData] = useState([])

    const url='https://api-r.ulteamapp.fr/api/custom/menu'/*url des catégories*/
    const params = {
        method:'GET',
        headers:{
            'Authorization': token,
            'Content-Type' : 'application/json'
        }
    }

    useEffect(() => {
        fetch(url,params)
        .then((res) => res.ok&& res.json())
        .then((response) => setData([
            response.categories[3],
            response.categories[4],
            response.categories[5],
            response.categories[6],
        ]))
        .catch((err) => alert('Voici votre erreur' + err))
        .finally(() => setIsLoading(false))
    },[])

    useEffect(() => {
        console.log('data :')
        console.log(data)
    },[data])

    const array=['Sport','Bien-être','Organisation','Santé']
    return(
        <View style={styles.discoverContainer}>
            {
                isLoading === false&&
                data.map((category,index)=>{
                    return(
                        <View key={category.id+'-'+index} style={styles.discoverFrame}>
                            <TouchableOpacity
                                style={styles.btnCategory}
                                activeOpacity={0.7}
                            >
                                <Image 
                                    source={{uri:category.illustrationUrl}} 
                                    style={styles.imageContainer}
                                />
                                <Text style={styles.title}>
                                    {category.name}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default DiscoverCategories;

const styles = StyleSheet.create({
    discoverContainer:{
        flex:1,
        width:'100%',
        paddingHorizontal:10,
        flexWrap:'wrap',
        flexDirection:'row',
    },
    btnCategory:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    discoverFrame:{
        position:'relative',
        zIndex:0,
        height:'50%',
        width:'50%',
        padding:3,
        borderRadius:25,
        overflow:'hidden',
    },
    title:{
        zIndex:5,
        fontWeight:'900',
        fontSize:26,
        letterSpacing:1,
        color:'white',
    },
    imageContainer:{
        position:'absolute',
        zIndex:-1,
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        opacity:0.5
    }
})
