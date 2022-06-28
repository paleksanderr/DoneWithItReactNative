import React from 'react';
import { Image, StyleSheet } from 'react-native';

function VievImageScreen(props) {
  return (
    <Image
      style={styles.image} 
    source={require('../assets/Layout-Supplementary-Materials/chair.jpg')} />
  );
}

const styles = StyleSheet.create({
  image: {
width: "100%",
height: "100%",
  }
});

export default VievImageScreen;