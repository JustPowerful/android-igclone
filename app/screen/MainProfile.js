import { View, Text } from "react-native";
import React from "react";

// test json
const users = require("../assets/TEST/profiles.json");

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileAbout from "../components/profile/ProfileAbout";
import PostGrid from "../components/profile/PostGrid";
const MainProfile = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ProfileHeader username="ahmed.amine.doudech" />
      <PostGrid />
    </View>
  );
};

export default MainProfile;
