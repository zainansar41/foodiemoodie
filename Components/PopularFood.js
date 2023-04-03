
import { StyleSheet, Text, View,FlatList, TouchableOpacity,Image} from 'react-native';
import { useState,useEffect } from 'react';
import { app } from "../Screens/firebase";
// import { getDatabase, ref, onValue, set, update } from "firebase/database";
import AntDesign from 'react-native-vector-icons/AntDesign'
import LikedButton from './LikedButton';
export default function PopularFood() {

  // const [myfood, setMyfood] = useState([])



  

  // useEffect(() => {


  //     const db = getDatabase(app);
  //     const dbRef = ref(db, 'food');
  //     onValue(dbRef, (snapshot) => {
  //         let data = snapshot.val();
  //         setMyfood(data)
  //         // console.log("data is ",data[2])

  //     });
  // }, [])
  return (
   
    
         <FlatList
           horizontal
           showsHorizontalScrollIndicator={false}
          data={myfood}
          keyExtractor={item=>item.key}
          renderItem={({item})=>(

            <TouchableOpacity >
            
            <View style={styles.item}>
                        <View style={{flexDirection:"row", marginBottom:2}}>
                        <AntDesign name='staro' style={styles.icon} />
                        <Text style={styles.rating}>{item.rating}</Text> 
                        <View style={{marginLeft:118}}>
                        <LikedButton like={item.liked} id={item.key} />
                        </View>
                        </View>
                        <Image style={styles.Images} source={{uri: item.img}} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>Rs.{item.price}/-</Text>
                         
                         </View>

            </TouchableOpacity>
            
          )}
        
          />
   
    
  );
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 5,
    borderRadius:10,
},
  
  Images: {
    width: 180,
    height: 130,
    borderRadius: 5,
},
title: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  textAlignVertical: 'center',
},
rating: {
  fontSize: 15,
  marginLeft:2,
},
price: {
  fontSize: 14,
  marginTop:5,
  textAlign: 'center',
  textAlignVertical: 'center',
},
icon:{
        
  color: 'black',
  fontSize: 15,
}
});
