import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert , ScrollView, Dimensions} from 'react-native';
import { useState, useEffect } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements';



const Signup = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSignup = async () => {
    console.log('LOGGED');
    if (!email || !name || !password || !confirmPassword) {
      Alert.alert('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Password should be match');
      return;
    }
    if (!isChecked) {
      Alert.alert('Please accept the Terms of Use & Privacy Policy');
      return;
    }
    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //   console.log("Successful");
    //   const user = userCredential.user;
    //   console.log("User data,", user);

    //   // write code to save your data in firestore
    //   // FirebaseError.firestore.write(user.uid,user.uid)

    //   Alert.alert(
    //     'Registered Successfully, Please Login',
    //     '',
    //     [
    //       { text: 'OK', onPress: () => navigation.navigate('Login') }
    //     ]
    //   );
    //   setEmail('');
    //   setName('');
    //   setPassword('');
    //   setConfirmPassword('');
    //   setIsChecked(false);
    // } catch (error) {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log('Error Code == ', errorCode)
    //   console.log('Error Message == ', errorMessage)
    //   Alert.alert('Registration Failed', errorMessage);
    // }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };





  return (

    <ScrollView style={styles.container}>
      <Text style={styles.text1}>Email</Text>
      <TextInput style={styles.fields} placeholder="E-mail" value={email} onChangeText={setEmail}></TextInput>
      <Text style={styles.texts}>Name</Text>
      <TextInput style={styles.fields} placeholder="Full Name" value={name} onChangeText={setName} ></TextInput>
      <Text style={styles.texts}>Password</Text>
      <View style={styles.passwordcontainer}>
        <TextInput style={styles.textinput} placeholder="Create Password" secureTextEntry={!showPassword} value={password} onChangeText={setPassword}></TextInput>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <AntDesign name={showPassword ? "eyeo" : "eye"} style={styles.icons} />
        </TouchableOpacity>
      </View>
      <Text style={styles.texts}>Confirm Password</Text>
      <View style={styles.passwordcontainer}>
        <TextInput style={styles.textinput} placeholder="Confirm Password" secureTextEntry={!showConfirmPassword} value={confirmPassword} onChangeText={setConfirmPassword}></TextInput>
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <AntDesign name={showConfirmPassword ? "eyeo" : "eye"} style={styles.icons} />
        </TouchableOpacity>
      </View>
      <View style={styles.CheckBox}>
        <CheckBox checked={isChecked} onPress={() => setIsChecked(!isChecked)} />
        <Text style={styles.termstext}>I accept the Terms of Use & Privacy Policy</Text>
      </View>
      <TouchableOpacity style={styles.Login} onPress={handleSignup} >
        <View style={styles.LoginButton}>
          <Text style={styles.Logintext}>Create Account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Loginwith}>
        <View style={styles.LoginwithButton}>
          <Text style={styles.Loginwithtext}>or Signup with</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.empty}></View>

      <TouchableOpacity onPress={goToLogin}><Text style={styles.already}>Already on foodie moodie? Sign up</Text></TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    // alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 60,
    height:Dimensions.get('window').height
  },
  fields: {
    width: 330,
    height: 50,
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,

  },
  passwordcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 50,
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10
  },
  textinput: {
    flex: 1,
    fontSize: 15
  },
  icons: {
    fontSize: 24,
    color: 'black',
    marginRight: 7
  },
  text1: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 15,
    fontWeight: 'bold'
  },
  texts: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 15,
    fontWeight: 'bold'
  },
  CheckBox: {
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 10,

  },
  termstext: {
    fontWeight: '600',
    marginTop: 18,
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
    height: 180,
    width: 100,
  },
  already: {
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
  }
});


export default Signup;