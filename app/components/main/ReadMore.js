import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";

export default function ReadMore({ elementText, maxCharacterCount = 100 }) {
  const text = elementText;
  [isTruncated, setIsTruncated] = useState(true);
  let resultString = "";
  if (isTruncated) {
    resultString = text.substring(0, maxCharacterCount) + "...";
  } else {
    resultString = text;
  }
  const handlePress = () => {
    setIsTruncated((oldState) => !oldState);
    console.log(isTruncated);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text>{resultString}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
