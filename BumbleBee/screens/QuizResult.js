import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default class QuizResult extends React.Component {
  static navigationOptions = {
    title: "QuizResult"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hello</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
