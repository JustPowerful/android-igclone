import { StyleSheet, View, Text } from "react-native";
import React from "react";

import Header from "../components/home/Header";
import StoryList from "../components/home/StoryList";
import Post from "../components/main/Post";

const Home = () => {
  return (
    <View style={styles.home}>
      <Header />
      <StoryList style={{ marginTop: 10 }} />

      <View>
        <Post />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Home;
