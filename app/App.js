import { StyleSheet, Platform, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./components/TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator style={styles.screenStyle} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navButton: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  screenStyle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
