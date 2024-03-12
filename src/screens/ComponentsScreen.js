import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Yurii";
  const greeting = <Text style={style.subHeaderStyle}>My name is {name}</Text>;

  return <View>
    <Text style={style.textStyle}>Getting started with React Native!</Text>
    {greeting}
  </View>;
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;