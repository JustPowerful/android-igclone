import { StyleSheet, Platform, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./components/TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PortalProvider } from "@gorhom/portal";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Necessairy for Detecting gesture

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <NavigationContainer>
          <TabNavigator style={styles.screenStyle} />
        </NavigationContainer>
      </PortalProvider>
    </GestureHandlerRootView>
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
