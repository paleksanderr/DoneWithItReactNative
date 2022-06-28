import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar as StatusBarType,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

export default function App() {


  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={{
        backgroundColor:'dodgerblue',
        height:"30%",
        width:'90%',
      }}></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const containerStyle = {backgroundColor: 'orange'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
 
  },
});
