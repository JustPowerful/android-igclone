import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useState, useCallback } from "react";
import { Portal } from "@gorhom/portal";

// [Needed : Very Needed]
// Portal lets you display a component above all other components
// To download portal go to: https://github.com/gorhom/react-native-portal
// https://www.youtube.com/watch?v=KvRqsRwpwhY : How to code a Bottom Sheet
// test json
const users = require("../assets/TEST/profiles.json");

import PostGrid from "../components/profile/PostGrid";
import BottomSheet from "../components/main/BottomSheet";
const MainProfile = () => {
  // Doing things here ;)
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ["40%"];

  const ref = useRef(null);
  const onPress = useCallback(() => {
    ref.current.scrollTo(-300);
  }, []);

  // Returning Components
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          ahmed.amine.doudech
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require("../assets/icons/profile/menu.png")}
            style={styles.menuButton}
          />
        </TouchableOpacity>
      </View>
      {/* Image gallery */}
      <PostGrid />
      <Portal>
        <BottomSheet ref={ref} />
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "white",
  },
  menuButton: { width: 25, height: 25 },
});

export default MainProfile;
