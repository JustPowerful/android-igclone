import { StyleSheet, Image, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={require("../../assets/home/logo.png")}
          resizeMode="contain"
          style={{ width: 130, height: 40 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    height: 50,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
});
