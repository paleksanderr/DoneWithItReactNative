import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Layout-Supplementary-Materials/background.jpg")}
    >
      <Image 
      style={styles.logo}
      source={require('../assets/Layout-Supplementary-Materials/logo-red.png')}/>
      <Text style={styles.title}>Hey</Text>
      <View style={styles.loginButton}>
      
      </View>
      <View style={styles.singUpButton}></View>
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
    width: "100%",
    height: "8%",
    backgroundColor: "#AD6A6C",
  },
  singUpButton: {
    width: "100%",
    height: "8%",
    backgroundColor: "#D0ADA7",
  },
  logo: {
    position: "absolute",
    top: 70,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    position: "absolute",
    top: 175,
  },
});

export default WelcomeScreen;