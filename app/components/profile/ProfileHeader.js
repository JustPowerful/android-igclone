import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ProfileHeader({ username }) {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>{username}</Text>
      <Image
        source={require("../../assets/icons/profile/menu.png")}
        style={styles.menuButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "white",
  },
  menuButton: { width: 25, height: 25 },
});
