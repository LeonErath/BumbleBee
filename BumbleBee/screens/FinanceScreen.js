import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Divider } from "react-native-elements";
import { VictoryPie } from "victory-native";
import {
  HelvBoldItalText,
  HelvBoldText,
  HelvText
} from "../components/StyledText";

export default class FinanceScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static navigationOptions = {
    title: "FinanceScreen"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Finance Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("CalculateScreen")}
          title="Calculate Finance"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
