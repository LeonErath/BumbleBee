import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default class QuizResult extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
  }

  static navigationOptions = {
    title: "QuizResult"
  };

  makeLifeAnalyse = () => {
    this.props.navigation.navigate("LifeAnalyseLite");
  };

  render() {
    const { navigation } = this.props;
    const score = navigation.getParam("score", 0);
    const text = navigation.getParam("text", "pretty ok");

    return (
      <View style={styles.container}>
        <Text style={styles.scoreLabel}>{score}%</Text>
        <Text style={styles.scoreLabel}>{text}</Text>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>1. Freedom</Text>
          <Text styles={styles.answer}>+1</Text>
        </View>

        <View style={styles.bottom}>
          <Button
            buttonStyle={styles.button}
            onPress={this.makeLifeAnalyse}
            title="Life Analyse!"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 16
  },
  question: {
    fontSize: 20,
    flexGrow: 3,
    alignSelf: "flex-start"
  },
  answer: {
    fontSize: 40,
    flexGrow: 1,
    alignSelf: "flex-end"
  },
  scoreLabel: {
    marginTop: 30,
    fontSize: 40,
    width: "100%",
    textAlign: "center",
    color: "#000"
  },
  button: {
    position: "absolute",
    bottom: 0,
    width: 200,
    marginLeft: -100
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
