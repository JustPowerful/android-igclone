import { StyleSheet, Image, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={{ backgroundColor: "white", height: 50 }}>
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

const styles = StyleSheet.create({});
