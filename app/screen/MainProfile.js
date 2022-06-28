import { View, Text } from "react-native";
import React from "react";

// test json
const users = require("../assets/TEST/profiles.json");

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileAbout from "../components/profile/ProfileAbout";
const MainProfile = () => {
  return (
    <View>
      <ProfileHeader username="ahmed.amine.doudech" />
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
    </View>
  );
};

export default MainProfile;
