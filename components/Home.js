import * as React from 'react';
import {View, Text, StyleSheet,SafeAreaView,Image} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import fontAwsome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import categoriesData from '../assets/data/categoriesData';
import itemsData from '../assets/data/itemsData';
import colors from '../assets/colors/colors';

Feather.loadFont();
export default Home = ()=>{
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require("../assets/images/profileimg_girl.jpg")} style={styles.profileImage}/>
                    <Feather name="menu" size={24} color={colors.textDark}></Feather>
                </View>
                
            </SafeAreaView>
            {/* titles */}
            
        </View>
        
    );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    headerWrapper:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        paddingTop:35,
        paddingBottom:10,
        alignItems:"center",
        backgroundColor:colors.primary,
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:40,
        
    },

})