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
import { useDimensions, useDeviceOrientation} from "@react-native-community/hooks";

export default function App() {
      
   

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#433A3F",
          width:10,
          height:220,
        }}
      />
      <View
        style={{
          backgroundColor: "#3D5A6C",
          width:10,
          height:320,
        }}
      />
      <View
        style={{
          backgroundColor: "#72A98F",
          width:10,
          height:220,
        }}
      />

    </View>
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
