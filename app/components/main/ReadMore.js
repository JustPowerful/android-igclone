import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";

export default function ReadMore({ elementText, maxCharacterCount = 100 }) {
  const text = elementText;
  [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated
    ? text.substring(0, maxCharacterCount) + "..."
    : text;
  const handlePress = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <View>
      <Text onPress={handlePress}>
        {resultString}{" "}
        <Text style={{ color: "gray" }}>
          {isTruncated ? "read more" : null}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
