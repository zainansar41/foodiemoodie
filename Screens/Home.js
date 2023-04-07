import React, { useEffect } from 'react'
import { StyleSheet, Text, View,  ScrollView } from 'react-native';
import Bestseller from '../Components/Bestseller';
// import PopularFood from '../Components/PopularFood';
import FoodCategory from '../Components/FoodCategory';
import Hometop from '../Components/Hometop';


const Home = () => {
    
    return (
        <View>
            <View style={styles.view}>
            <Hometop/>
            <ScrollView>
           <Text style={styles.header}>Food Category</Text>
            <FoodCategory/>
            {/* <Text style={styles.header}>Popular Food</Text>
            <Bestseller/> */}
            <Text style={styles.header}>Best Seller</Text>
            <Bestseller/>

            </ScrollView>
            
            </View>
            
            {/* <NavBar/> */}
            
            
            </View>
    )
}
const styles = StyleSheet.create({
view:{
     padding: 10,
     marginTop: 50,
},
header:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10,
    marginTop:15,
    marginLeft:5
},




})


export default Home; 