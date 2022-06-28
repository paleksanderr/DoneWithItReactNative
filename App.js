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
      const { landscape } = useDeviceOrientation();
   

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          backgroundColor: "#433A3F",
          width:100,
          height:100,
        }}
      />
      <View
        style={{
          backgroundColor: "#3D5A6C",
          width:300,
          height:100,
        }}
      />
      <View
        style={{
          backgroundColor: "#72A98F",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "#8DE969",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "#CBEF43",
          flex: 0.2,
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
