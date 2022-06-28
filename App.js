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
    <SafeAreaView style={[styles.container, containerStyle]}>
        <Button
        color={'orange'} 
        title="click me" 
        onPress={()=> Alert.alert('??!')}/>
        
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const containerStyle = {backgroundColor: 'orange'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    
  },
});
