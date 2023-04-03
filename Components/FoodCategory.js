
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { useState } from 'react';
import burger from "../assets/burgerCategory.jpg"
import kebab from "../assets/kebabCategory.jpg"
import fries from "../assets/friesCategory.png"

export default function FoodCategory() {

    const [mycategory, setMycategory] = useState([
        {
            key: 0,
            image: burger,
            name: 'Burger',
        },
        {
            key: 1,
            image: kebab,
            name: 'Kebab',
        },
        {
            key: 2,
            image: fries,
            name: 'Fries',
        },

    ])

    const myOnClick = (item) => {
        Alert.alert('Selected: ' + item.name)
    }
    return (

        
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={mycategory}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (

                    <TouchableOpacity onPress={() => myOnClick(item)} >

                        <View style={styles.item}>

                            <Image style={styles.Images} source={item.image} />
                            <Text style={styles.text}>{item.name}</Text>


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
        flexDirection:'row',
        marginHorizontal: 5,
        borderRadius:10,
    },
    Images: {
        width: 80,
        height: 50,
        borderRadius: 5,
    },
    text:{
        fontSize:17,
        fontWeight:'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding:10
    }

});
