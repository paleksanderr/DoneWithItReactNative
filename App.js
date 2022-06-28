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
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          backgroundColor: "#3C1642",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "#086375",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "#1DD3B0",
          flex: 1,
        }}
        
      />
            <View
        style={{
          backgroundColor: "#3C1642",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "#086375",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "#1DD3B0",
          flex: 1,
        }} />
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
