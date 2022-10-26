import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={_styles.tjjNnVWp}>
      <Pressable onPress={() => navigation.navigate("Untitled2")} style={_styles.bNOZhazK}><View style={_styles.OzBznzQy}></View></Pressable></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  tjjNnVWp: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  OzBznzQy: {
    left: 110,
    top: 220,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  bNOZhazK: {
    position: "unset"
  }
});