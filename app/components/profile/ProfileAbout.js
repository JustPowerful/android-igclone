import { StyleSheet, Text, View, Image, Linking } from "react-native";
import ReadMore from "../../components/main/ReadMore";
import React from "react";

export default function ProfileAbout({
  pictureUrl,
  name,
  followingCount,
  followerCount,
  bio,
  websiteUrl,
  postCount,
}) {
  return (
    <View style={{ padding: 15, backgroundColor: "white" }}>
      {/* Begin: top view */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {/* Profile pic view */}
        <View>
          <Image source={{ uri: pictureUrl }} style={styles.profilePicture} />
        </View>
        {/* Stats view */}
        <View style={{ flexDirection: "row" }}>
          {/* Post count */}
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{postCount}</Text>
            <Text style={styles.statText}>Posts</Text>
          </View>

          {/* Following count */}
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{followingCount}</Text>
            <Text style={styles.statText}>Following</Text>
          </View>

          {/* Followers count */}
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{followerCount}</Text>
            <Text style={styles.statText}>Followers</Text>
          </View>
        </View>
      </View>
      {/* End: top view */}
      {/* Begin: bottom view */}
      <View style={{}}>
        <Text style={{ fontWeight: "700" }}>{name}</Text>
        {bio == null ? (
          <Text>empty bio...</Text>
        ) : (
          <ReadMore elementText={bio} maxCharacterCount={70} />
        )}
        <Text
          style={{ color: "dodgerblue" }}
          onPress={() => {
            Linking.openURL(websiteUrl);
          }}
        >
          {websiteUrl}
        </Text>
      </View>
      {/* End: bottom view */}
    </View>
  );
}

const styles = StyleSheet.create({
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "gray",
    borderWidth: 1,
  },
  stat: {
    paddingRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  statText: {
    fontSize: 12,
    fontWeight: "300",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "600",
  },
});
