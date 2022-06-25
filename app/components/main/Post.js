import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Post() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: "white",
          elevation: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/TEST/profilepics/1.jpg")}
            resizeMode="contain"
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 4 }}
          />
          <Text style={{ fontWeight: "500" }}> bidi.aboul </Text>
        </View>
        <View>
          <Image
            source={require("../../assets/icons/post/postsettings.png")}
            resizeMode="contain"
            style={{ width: 15, height: 15 }}
          />
        </View>
      </View>
      <Image
        source={require("../../assets/TEST/post/post.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: 350 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
