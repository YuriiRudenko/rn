import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const BUTTONS = ['Components', 'List', 'Image', 'Counter', 'Color', 'Square', 'Text'];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) =>
    <View style={styles.view}>
      <Button
        onPress={() => navigation.navigate(item)}
        title={`Go to ${item} Demo`}
      />
    </View>

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <FlatList
        keyExtractor={item => item}
        data={BUTTONS}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  view: {
    marginVertical: 10,
  }
});

export default HomeScreen;
