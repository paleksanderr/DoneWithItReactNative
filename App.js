import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
        <Button
        color={'orange'} 
        title="click me" 
        onPress={()=> Alert.alert('Tytuł', 'Kaboom', [{text: 'yes', onPress: ()=> alert('zgoda')}, {text: 'no', onPress: () }])}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
