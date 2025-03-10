
import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { app, db } from "../firebase";
import { collection, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import AntDesign from 'react-native-vector-icons/AntDesign'



export default function Bestseller() {
    const [likeBTN, setLikeBTN] = useState([])

    const [myfood, setMyfood] = useState([])
    const [changedLike, setChangedLike] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const db = getFirestore(app);
            const collectionref = collection(db, "bestsellers");
            const querySnapshot = await getDocs(collectionref);
            let data = querySnapshot.docs.map(doc => doc.data());
            data.forEach((item, index) => {
                if (item.isLike.includes(global.userID)) {
                    setLikeBTN(prevState => {
                        const newState = [...prevState];
                        newState[index] = true;
                        return newState;
                    });
                }
            });
            setMyfood(data);
        };
        getData();
    }, [changedLike])

    const handleLikeBTN = async (id) => {
        const db = getFirestore(app);
        const result = myfood.find(item => item.id === id);
        const docRef = doc(db, "bestsellers", id);
        if (result.isLike.includes(global.userID)) {
            const updatedLikes = result.isLike.filter(likedUser => likedUser !== global.userID);
            await updateDoc(docRef, { isLike: updatedLikes });
        } else {
            const updatedLikes = [...result.isLike, global.userID];
            await updateDoc(docRef, { isLike: updatedLikes });
        }
        setChangedLike(!changedLike);
    }






    return (


        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={myfood}
            renderItem={({ item, index }) => (

                <>

                    <TouchableOpacity>
                        <View style={styles.item}>

                            <Image style={styles.Images} source={{ uri: item.imageurl }} />
                            <View style={styles.viewrow}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.price}>Rs.{item.price}/-</Text>
                            </View>
                            <View style={styles.viewrow}>

                                <TouchableOpacity onPress={() => {
                                    setLikeBTN(prevState => {
                                        const newState = [...prevState];
                                        newState[index] = !newState[index];
                                        return newState;
                                    });
                                    handleLikeBTN(item.id);
                                }}>
                                    <AntDesign name='heart' style={{ color: likeBTN[index] ? 'red' : 'grey', fontSize: 20, textAlign: 'right' }} /></TouchableOpacity>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <AntDesign name='staro' style={styles.icon} />
                                    <Text style={styles.rating}>{item.rating}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </>
                //color: isLiked ? 'red' : 'grey',
            )}

        />

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        borderRadius: 10,
    },
    viewrow: {
        flexDirection: 'column',
        alignContent: "center",
        justifyContent: "center",
        padding: 10
    },


    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: 13,
        marginLeft: 2,
    },
    price: {
        fontSize: 14,
        marginTop: 5,
    },
    Images: {
        width: 100,
        height: 70,
        borderRadius: 5,
    },
    icon: {

        color: 'black',
        fontSize: 13,
    }

});
