import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import ReadMore from "./ReadMore";

export default function Post({ item, index }) {
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
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: item.picture }}
            resizeMode="contain"
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 4 }}
          />
          <Text style={{ fontWeight: "500" }}> {item.username} </Text>
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
        source={{
          uri: `https://picsum.photos/1000/1000/?random&dummyParam=${Math.floor(
            Math.random() * 9999
          )}`,
        }}
        resizeMode="cover"
        style={{ width: "100%", height: 350 }}
      />
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
          },
          styles.postBtnContainer,
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/icons/post/heart.png")}
            style={styles.postButtons}
          />
          <Image
            source={require("../../assets/icons/post/comment.png")}
            style={styles.postButtons}
          />
          <Image
            source={require("../../assets/icons/post/share.png")}
            style={styles.postButtons}
          />
        </View>
        <View>
          <Image
            source={require("../../assets/icons/post/save.png")}
            style={{ width: 25, height: 25 }}
          />
        </View>
      </View>
      {/* Description view */}
      <View style={styles.descriptionContainer}>
        <ReadMore
          key={index}
          maxCharacterCount={80}
          elementText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga et magnam odit, culpa architecto molestias beatae aliquam aperiam ipsum est unde expedita, doloremque non officiis! Blanditiis sint expedita quia."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postBtnContainer: {
    padding: 5,
  },
  postButtons: {
    width: 33,
    height: 33,
    marginRight: 10,
  },
  descriptionContainer: {
    padding: 10,
    backgroundColor: "white",
  },
});
