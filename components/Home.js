import * as React from 'react';
import {FlatList,StatusBar,View, Text, StyleSheet,SafeAreaView,Image} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import fontAwsome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import categoriesData from '../assets/data/categoriesData';
import itemsData from '../assets/data/itemsData';
import colors from '../assets/colors/colors';


Feather.loadFont();
export default Home = ()=>{

    const renderCategoryItem=({ item })=>{
        return(
            // <View style={styles.categoriesListWrapper}>
            <View style={[styles.categoryItemWrapper, {
                backgroundColor:item.selected ? colors.secondaryT50 : colors.background,
                marginLeft: item.id==1 ? 20 : 0,
            },
            ]}>
               <Image source={item.image} style={styles.categoryItemImage}/>
               <Text style={styles.categoryItemTitle}>{item.title}</Text>
               <View style={styles.categorySelectWrapper}>
                   {/* <Feather
                   name="shevron-right"
                   size={8}
                   style={styles.categorySelectIcon}
                   /> */}
               </View>
            </View>
        );
    };

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary}/>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require("../assets/images/profileimg_girl.jpg")} style={styles.profileImage}/>
                    <Feather name="menu" size={24} color={colors.textDark}></Feather>
                </View>
                
            </SafeAreaView>
            {/* titles */}
            <View style={styles.titleView}>
                <Text style={styles.titlesTitle}>Organic Fertilizer</Text>
            </View>

            {/* Search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark}/>
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search...</Text>
                </View>
            </View>

            {/* Categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                <FlatList
                data={categoriesData}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
                horizontal={true}
                /> 
                
                </View> 
            </View>

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
        paddingTop:15,
        alignItems:"center",
        backgroundColor:colors.secondary,
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:40,
        
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:40,
        
    },
    titlesTitle:{
        // fontFamily:"Roboto-bold",
        fontSize:32,
        color:colors.textDark,
        paddingLeft:10,
    },
    titleView:{
        backgroundColor:colors.secondary,
        padding:10,
        paddingBottom:10,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    searchWrapper:{
        paddingTop:20,
        paddingBottom:10,
        flexDirection:"row",
        alignItems:"center",  
        borderBottomColor:colors.textlight,
        borderBottomWidth:2,
        marginHorizontal:20,
    },
    search:{
        marginLeft:20,
    },
    searchText:{
        fontSize:15,
        color:colors.textlight,
    },
    categoriesWrapper:{
       marginTop:30,

    },
    categoriesTitle:{
        fontWeight:"bold",
        fontSize:20,
        paddingHorizontal:20,
    },

    categoriesListWrapper:{
        paddingTop:15,
        paddingBottom:20,
        // paddingLeft:20,
    },

    categoryItemWrapper:{
       backgroundColor:colors.secondaryT50,
       display:'flex',
       marginRight:20,
       borderRadius:20,
       width:130,
       padding:10,
       alignItems:"center",
       justifyContent:"center",

    },

    categoryItemImage:{
        marginTop:25,
        alignSelf:"center",
        marginHorizontal:27,
    },

    categoryItemTitle:{
        display:"flex",
        textAlign:"center",
        fontSize:16,
        fontWeight:"600",
        marginTop:10,
    },

    categorySelectWrapper:{
        width:50,
        height:50,
        alignSelf:"center",
        justifyContent:"center",
        
    },

    categoryItemimage:{

    },


    itemsWrapper:{
       paddingHorizontal:20,
    },

    itemsTitle:{
        fontSize:16,
        fontWeight:"bold",  
    },

})