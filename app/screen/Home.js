import { StyleSheet, View, Text, FlatList } from "react-native";
import React, { useState } from "react";

import Header from "../components/home/Header";
import StoryList from "../components/home/StoryList";
import Post from "../components/main/Post";

// Testing env {}
import users from "../assets/TEST/profiles.json";

const Home = () => {
  return (
    <View style={styles.home}>
      <Header />

      <FlatList
        ListHeaderComponent={() => (
          <StoryList
            users={users}
            style={{ paddingVertical: 10, backgroundColor: "white" }}
          />
        )}
        data={users.profiles}
        renderItem={(item, index) => <Post item={item.item} index={index} />}
        keyExtractor={(item, index) => index}
      />
      {/* <Post item={users.profiles[0]} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});

export default Home;
