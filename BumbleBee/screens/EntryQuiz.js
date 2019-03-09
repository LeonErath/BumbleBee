import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { ButtonGroup, Button } from "react-native-elements";
import {
  HelvBoldItalText,
  HelvBoldText,
  HelvText
} from "../components/StyledText";

export default class EntryQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 1,
      QuestionsArray: [
        {
          id: 1,
          text: "Do you have the financial freedom you desire?",
          max: 10,
          value: 4
        },
        {
          id: 2,
          text:
            "Do you love what you do and are you using your talents to their maximum?",
          max: 10,
          value: 4
        },
        {
          id: 3,
          text:
            "Do you feel that in the last three years, you have made huge progress in your life?",
          max: 10,
          value: 4
        },
        {
          id: 4,
          text: "Are you happy?",
          max: 10,
          value: 4
        },
        {
          id: 5,
          text: "How oft do you exercise? (per week)",
          max: 7,
          value: 4
        }
      ]
    };
    this.calculateScore = this.calculateScore.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    const { currentQuestion } = this.state;

    this.state.QuestionsArray[currentQuestion - 1].value = selectedIndex;
    this.forceUpdate();
  }

  static navigationOptions = {
    title: "Quiz"
  };

  calculateScore() {
    const { QuestionsArray } = this.state;

    let var1 = QuestionsArray[0].value + 1;
    let var2 = QuestionsArray[1].value + 1;
    let var3 = QuestionsArray[2].value + 1;
    let var4 = QuestionsArray[3].value + 1;
    let var5 = QuestionsArray[4].value + 1;

    if (var5 > 1 && var5 < 4) {
      var5 = 5;
    } else {
      var5 = var5 - 5;
    }

    let sum =
      1.5 * (var1 - 5) +
      1.0 * (var2 - 5) +
      1.1 * (var3 - 5) +
      1.2 * (var4 - 5) +
      1.0 * var5;
    let endsum = sum / 29;
    let result;
    if (endsum < 0.35) {
      result = "bad";
    } else if (result > 0.35 && result < 0.65) {
      result = "is ok";
    } else {
      result = "pretty good";
    }

    console.log(sum, endsum, result);

    this.props.navigation.navigate("QuizResult", {
      score: endsum * 100,
      text: result
    });
  }

  nextQuestion = () => {
    let currentQuestion = this.state.currentQuestion + 1;
    if (currentQuestion > this.state.QuestionsArray.length) {
      this.calculateScore();
    } else {
      this.setState({ currentQuestion: currentQuestion });
    }
  };

  render() {
    const { currentQuestion } = this.state;

    const ques = this.state.QuestionsArray.filter(
      ques => ques.id === currentQuestion
    )[0];

    const buttons = Array.from({ length: ques.max }, (v, k) => k + 1);
    const questionText = ques.text;

    return (
      <View style={styles.container}>
        <View style={styles.groupedText}>
          <HelvBoldText style={styles.quizLabel}>
            Quiz {this.state.currentQuestion}/{this.state.QuestionsArray.length}
          </HelvBoldText>

          <HelvBoldItalText style={styles.questionLabel}>
            {questionText}
          </HelvBoldItalText>
        </View>

        <View style={styles.item}>
          {this.state.currentQuestion === 1 && (
            <HelvText style={styles.hint1}>"Almost a Slave"</HelvText>
          )}

          {this.state.currentQuestion === 1 && (
            <View>
              <Image
                source={require("../assets/images/ArrowDown.png")}
                style={styles.arrowDown}
              />
            </View>
          )}
          <ButtonGroup
            selectedButtonStyle={styles.selectStyle}
            containerStyle={styles.buttonContainer}
            onPress={this.updateIndex}
            selectedIndex={ques.value}
            buttons={buttons}
            containerStyle={{ height: 40 }}
          />
          {this.state.currentQuestion === 1 && (
            <View style={styles.arrowContainer}>
              <Image
                source={require("../assets/images/ArrowUp.png")}
                style={styles.arrowUp}
              />
            </View>
          )}
          {this.state.currentQuestion === 1 && (
            <View style={styles.arrowContainer}>
              <HelvText style={styles.hint2}>"Free like Dobby"</HelvText>
            </View>
          )}
        </View>
        <View style={styles.bottom}>
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
            title={this.state.currentQuestion === 5 ? "FINNISH" : "NEXT"}
            onPress={this.nextQuestion}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hint1: {
    color: "#4D4F5C",
    fontSize: 20,
    paddingLeft: 16,
    fontStyle: "italic"
  },
  hint2: {
    color: "#4D4F5C",
    fontSize: 20,
    paddingRight: 16,
    fontStyle: "italic"
  },
  arrowContainer: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  arrowDown: {
    paddingLeft: 70,
    resizeMode: "contain",
    paddingBottom: 10
  },
  arrowUp: {
    paddingLeft: 70,
    resizeMode: "contain",
    paddingBottom: 10
  },
  item: {
    flex: 3
  },
  bottom: {
    flex: 1,
    flexDirection: "column-reverse"
  },
  groupedText: {
    flex: 3
  },
  quizLabel: {
    fontSize: 20,
    color: "#4D4F5C",
    paddingLeft: 16
  },
  questionLabel: {
    padding: 26,
    color: "#4D4F5C",
    fontSize: 30,
    textAlign: "center"
  },
  buttonStyle: {
    width: 200,
    backgroundColor: "#00387D"
  },
  buttonContainer: {
    alignItems: "center",
    paddingBottom: 16
  },

  selectStyle: {
    backgroundColor: "#00387D"
  },

  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff"
  }
});
