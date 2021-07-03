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
                    <Image source={require("../assets/images/profile_photo_2.png")} style={styles.profileImage}/>
                    {/* icons */}
                </View>
                <Feather name="menu" size={24} color={colors.textDark}></Feather>
            </SafeAreaView>

        </View>
        
    );
}


const styles=StyleSheet.create({

})