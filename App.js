import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,  SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => {
    alert('You pressed the button!?');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Open up App.js to start working on your app!</Text>
      <Image source={require('./assets/favicon.png')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
