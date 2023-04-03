import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,Image, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'


// import {auth} from "./firebase";
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";


const Login = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Handle Sign In')
    // await signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log("user data,", user);

    //     navigation.navigate('Home');
    //     setEmail('');
    //     setPassword('');
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log("Error,", errorMessage);
    //     // ..
    //     Alert.alert('Invalid Email or password');
    //   });
  };

  

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };


  return (

    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.foodie} >Foodie Moodie</Text>
   


      <View style={styles.emailContainer}>
        <AntDesign name='mail' style={styles.icon} />
        <TextInput style={styles.textinput} placeholder="E-mail" value={email} onChangeText={setEmail}></TextInput>
      </View>
      <View style={styles.passwordcontainer}>
        <AntDesign name='lock' style={styles.icon} />
        <TextInput style={styles.textinput} secureTextEntry={!showPassword} placeholder="Password" value={password} onChangeText={setPassword}></TextInput>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <AntDesign name={showPassword ? "eyeo" : "eye"} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity><Text style={styles.forget}>Forget password?</Text></TouchableOpacity>

      <TouchableOpacity style={styles.Login}  onPress={handleLogin} >
        <View style={styles.LoginButton}>
          <Text style={styles.Logintext}>Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Loginwith}>
        <View style={styles.LoginwithButton}>
          <Text style={styles.Loginwithtext}>or Login with</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.empty}></View>


      <TouchableOpacity onPress={goToSignup}><Text style={styles.new}>New on foodie moodie? Sign up</Text></TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    marginTop: 70,
    marginLeft: 15,
    fontWeight: 'bold'
  },
  foodie: {
    width:300,
    height:60,
    marginLeft:50,
    marginTop:20,
    textAlign:'center',
    fontSize: 38,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#F55050'
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 50,
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 70,
    paddingLeft: 10,
    borderRadius: 10
  },
  passwordcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 50,
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 30,
    paddingLeft: 10,
    borderRadius: 10
  },
  textinput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 15
  },
  icon:
  {
    color: 'black',
    padding: 10,
    fontSize: 25,
    marginLeft: 5,
  },
  forget: {
    marginLeft: 245,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'grey'
  },
  Login: {
    width: 330,
    height: 50,
    marginLeft: 30,
    marginTop: 20,
  },
  LoginButton: {
    flex: 1,
    backgroundColor: '#F55050',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Logintext: {
    color: '#fff',
    fontSize: 18,
  },
  Loginwith: {
    width: 330,
    height: 50,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',

  },
  LoginwithButton: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Loginwithtext: {
    color: 'grey',
    fontSize: 18,
  },
  empty: {
    height: 250,
    width: 100,
  },
  new: {
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
  }
});


export default Login;