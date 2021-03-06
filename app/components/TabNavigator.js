import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import Home from "../screen/Home";
import MainProfile from "../screen/MainProfile";
import Search from "../screen/Search";
import Shop from "../screen/Shop";
import Post from "../screen/Post";

import PostButton from "./PostButton";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ style }) => {
  return (
    <Tab.Navigator
      sceneContainerStyle={style}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          elevation: 0,
          backgroundColor: "white",
          height: 50,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "dodgerblue" : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/search.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "dodgerblue" : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/post.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "white",
                }}
              />
            </View>
          ),
          tabBarButton: (props) => <PostButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/shop.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "dodgerblue" : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MainProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/profile.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "dodgerblue" : "black",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
