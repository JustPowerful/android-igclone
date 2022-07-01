import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useImperativeHandle } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 400;

const BottomSheet = React.forwardRef(({}, ref) => {
  const translateY = useSharedValue(0);

  const scrollTo = useCallback((destination) => {
    // worklet is added to let the function run asynchronously
    "worklet";
    translateY.value = withSpring(destination, { damping: 50 });
  });

  useImperativeHandle(ref, () => ({ scrollTo }), [scrollTo]); // [scrollTo] is the only argument
  //   useImperativeHandle is a function to pass the ref to the parent component

  const context = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        // translateY.value = withSpring(0, { damping: 50 });
        scrollTo(0);
      }
    });

  //   useEffect(() => {
  //     translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
  //   }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </Animated.View>
    </GestureDetector>
  );
});

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 2,
  },
});

export default BottomSheet;
