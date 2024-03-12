import React from "react";
import { View, Text, Button } from "react-native";

const ColorCounter = ({ title, onIncrease, onDecrease }) => {
  return <View>
    <Text>{title}</Text>
    <Button title={`Increase ${title}`} onPress={onIncrease} />
    <Button title={`Decrease ${title}`} onPress={onDecrease} />
  </View>;
}

export default ColorCounter;