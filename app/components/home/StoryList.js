import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

// Testing env
import users from "../../assets/TEST/profiles.json";

export default function StoryList({ props, style }) {
  return (
    <View style={style}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        {...props}
      >
        {users.profiles.map((profile, index) => (
          <View key={index} style={styles.Story}>
            <View
              style={{
                borderRadius: 35,
                borderColor: "dodgerblue",
                borderWidth: 2,
              }}
            >
              <Image
                source={{ uri: profile.picture }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 2,
                }}
              />
            </View>
            <Text style={styles.storyUsername}>{profile.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Story: {
    alignItems: "center",

    marginHorizontal: 8,
  },
  storyUsername: {
    fontSize: 12,
    maxWidth: 60,
  },
});
