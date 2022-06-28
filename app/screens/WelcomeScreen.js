import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Layout-Supplementary-Materials/background.jpg")}
    >
      <View style={styles.logoContainer}>
      <Image 
      style={styles.logo}
      source={require('../assets/Layout-Supplementary-Materials/logo-red.png')}/>
      <Text style={styles.title}>Sell what you don't need</Text>

      </View>
      <View 
      
      style={styles.loginButton}>
      <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.singUpButton}>
      <Text style={styles.singUpText}>Sing Up</Text>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "80%",
    height: "8%",
    backgroundColor: "#AD6A6C",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  singUpButton: {
    width: "80%",
    height: "8%",
    backgroundColor: "#D0ADA7",
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: "5%",
    marginBottom: "5%",
    
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;