import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableHighlight,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./components/home/TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navButton: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
