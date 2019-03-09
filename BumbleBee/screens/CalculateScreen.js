import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Divider } from "react-native-elements";
import { VictoryPie } from "victory-native";
import {
  HelvBoldItalText,
  HelvBoldText,
  HelvText
} from "../components/StyledText";

export default class CalculateScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static navigationOptions = {
    title: "CalculateScreen"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Calcualte Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("SaldoScreen")}
          title="Results"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 40,
    width: "100%",
    textAlign: "center",
    color: "#4D4F5C"
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
