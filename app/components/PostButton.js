import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function PostButton({ children, onPress, focused }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.circleButton}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: "dodgerblue",
    width: 60,
    height: 60,
    borderRadius: 35,
    top: -18,
  },
});
