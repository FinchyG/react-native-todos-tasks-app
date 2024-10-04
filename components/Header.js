import React from "react";
import { StyleSheet, View, Text } from "react-native";
 
const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 40,
    backgroundColor: "rgb(65,105,225)",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "white",
    fontSize: 20
  }
});
 
export default Header;