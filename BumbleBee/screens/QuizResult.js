import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Divider } from "react-native-elements";
import { VictoryPie } from "victory-native";
import {
  HelvBoldItalText,
  HelvBoldText,
  HelvText
} from "../components/StyledText";

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
    const var1 = (navigation.getParam("var1", 7) / 10) * 100;
    const var2 = (navigation.getParam("var2", 7) / 10) * 100;
    const var3 = (navigation.getParam("var3", 7) / 10) * 100;
    const var4 = (navigation.getParam("var4", 7) / 10) * 100;
    const var5 = navigation.getParam("var5", 3);
    let rest = 100 - score;

    return (
      <View style={styles.container}>
        <HelvBoldText style={styles.headline}>Results</HelvBoldText>

        <View style={styles.chartStyle}>
          <VictoryPie
            animate={{
              duration: 2000
            }}
            padAngle={3}
            colorScale={["tomato", "gray"]}
            startAngle={90}
            endAngle={-90}
            innerRadius={120}
            data={[{ x: "You", y: score }, { x: "Rest", y: rest }]}
          />
        </View>
        <HelvBoldText style={styles.scoreLabel}>{score}%</HelvBoldText>
        <HelvBoldItalText style={styles.scoreLabel}>"{text}"</HelvBoldItalText>
        <View style={{ flex: 3, width: "100%" }}>
          <ScrollView>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>1. Freedom</Text>
              <HelvText style={styles.answer}> {var1}%</HelvText>
            </View>
            <Divider />
            <View style={styles.questionContainer}>
              <Text style={styles.question}>2. Satisfied</Text>
              <HelvText style={styles.answer}> {var2}%</HelvText>
            </View>
            <Divider />
            <View style={styles.questionContainer}>
              <Text style={styles.question}>3. Progress</Text>
              <HelvText style={styles.answer}> {var3}%</HelvText>
            </View>
            <Divider />
            <View style={styles.questionContainer}>
              <Text style={styles.question}>4. Happiness</Text>
              <HelvText style={styles.answer}> {var4}%</HelvText>
            </View>
            <Divider />
            <View style={styles.questionContainer}>
              <Text style={styles.question}>5. Fitness</Text>
              <HelvText style={styles.answer}> {var5} </HelvText>
            </View>
          </ScrollView>
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
  chartStyleSmall: {
    flex: 1,
    alignSelf: "flex-end"
  },
  headline: {
    paddingTop: 20,
    fontSize: 40,
    textAlign: "center",
    flex: 1,
    marginBottom: -60
  },
  chartStyle: {
    flex: 2
  },
  questionContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 16
  },
  question: {
    fontSize: 20,
    flexGrow: 1,
    alignSelf: "flex-start"
  },
  answer: {
    fontSize: 20,
    color: "#00387D",
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    padding: 4,
    borderColor: "#00387D"
  },
  scoreLabel: {
    flex: 1,
    fontSize: 30,
    width: "100%",
    textAlign: "center",
    color: "#000"
  },
  button: {
    position: "absolute",
    bottom: 0,
    width: 200,
    marginLeft: -100,
    backgroundColor: "#00387D"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
