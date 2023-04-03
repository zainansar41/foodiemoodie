import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';
import Background from '../assets/Background.jpg'
const Starting = ({navigation}) => {

     const goToLogin = () => {
        navigation.navigate('Login');
      };
    
      const goToSignup = () => {
        navigation.navigate('Signup');
      };
    

  return (
    
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.backgroundImage}> 
      
      <View style={styles.overlay}>

     
      <Text style={styles.Text1}>Enjoy your fast food only in Foodie Moodie</Text>
      <Text style={styles.Text2}>Here is the place to buy food you want</Text>
      
      <TouchableOpacity style={styles.Login} onPress={goToLogin}>
            <View style={styles.LoginButton}>
              <Text style={styles.Logintext}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.SignUp} onPress={goToSignup}>
            <View style={styles.signUpButton}>
              <Text style={styles.SignUptext}>Signup</Text>
            </View>
          </TouchableOpacity>
      
      </View>
   
      </ImageBackground>
      
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  Text1:{
    fontSize:32,
    paddingLeft:16,
    paddingRight:16,
    fontWeight:'bold',
    fontStyle:"italic",
    color:'white',
    marginTop:530

  },
  Text2:{
    fontSize:17,
    paddingLeft:14,
    paddingRight:14,
    color:'white',
    marginTop:15
  },
  Login:{
    width: 310,
    height:57,
    marginLeft: 40,
    marginTop: 20,
  },
  LoginButton: {
    flex: 1,
    backgroundColor: '#F55050',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Logintext:{
    color:'#fff',
    fontSize:18,
  },
  SignUp:{
    width: 310,
    height: 57,
    marginLeft: 40,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    
  },
  signUpButton: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  SignUptext:{
    color:'#fff',
    fontSize:18,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});


export default Starting ;