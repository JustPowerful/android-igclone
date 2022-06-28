import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { useState, useEffect } from "react";

import ProfileAbout from "./ProfileAbout";

// TEST JSON
const users = require("../../assets/TEST/profiles.json");
const numColumns = 3;
export default function PostGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/pictures/.json")
      .then((response) => response.json())
      .then((data) => setImages(data.data.children));
  }, []);

  const _renderItem = (items, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log("Obunga");
        }}
      >
        <Image
          source={{ uri: items.item.data.thumbnail }}
          style={{
            height: Dimensions.get("window").width / numColumns - 2,
            width: Dimensions.get("window").width / numColumns - 2,
            marginRight: 2,
            marginBottom: 2,
          }}
          key={index}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <ProfileAbout
            postCount={15}
            followingCount={500}
            followerCount={"9K"}
            pictureUrl={users.profiles[3].picture}
            name="william"
            bio={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta vero impedit eligendi cumque cum. Consequatur vel corporis minus iusto rerum saepe veritatis nesciunt"
            }
            websiteUrl={"https://www.google.com"}
          />
        }
        data={images}
        renderItem={_renderItem}
        keyExtractor={(items, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
});
