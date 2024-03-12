import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Andrii", age: "20" },
    { name: "Dmytro", age: "30" },
    { name: "Pavlo1", age: "20" },
    { name: "Pavlo2", age: "31" },
    { name: "Pavlo3", age: "30" },
    { name: "Pavlo4", age: "29" },
    { name: "Pavlo5", age: "28" },
    { name: "Pavlo6", age: "27" },
    { name: "Pavlo7", age: "26" },
    { name: "Pavlo8", age: "25" },
    { name: "Pavlo9", age: "24" },
    { name: "Pavlo10", age: "23" },
    { name: "Pavlo11", age: "22" },
    { name: "Pavlo12", age: "21" },
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    fontSize: 30
  }
});

export default ListScreen;