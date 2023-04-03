
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import humburger from "../assets/hamburger.png"
export default function NavBar() {

    

  
    return (


        <View>
            <Image style={{width:30,height:30}} source={humburger} />
            <Text style={{fontSize:17,fontWeight:'bold',marginTop:10}}>Hello Tajamal Shah!</Text>
            <Text style={{fontSize:27,fontWeight:'bold',marginTop:10}}>Choose your favourite food</Text>
            <View style={styles.searchView}>
            <AntDesign name='search1' style={styles.icon}/>
            <TextInput style={{fontSize:15}} placeholder="Search your favourite food" ></TextInput>
            </View>
           
       
        </View>

    );
}

const styles = StyleSheet.create({
searchView:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 360,
    height: 50,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10
},

icon:
{
  color: 'black',
  padding: 10,
  fontSize: 25,
  marginLeft: 5,
},

});
