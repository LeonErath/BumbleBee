import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ButtonGroup, Button } from "react-native-elements";

export default class EntryQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2,
      currentQuestion: 1,
      QuestionsArray: [
        {
          id: 1,
          text: "Do you have the financial freedom you desire?",
          max: 10
        },
        {
          id: 2,
          text:
            "Do you love what you do and are you using your talents to their maximum?",
          max: 10
        },
        {
          id: 3,
          text:
            "Do you feel that in the last three years, you have made huge progress in your life?",
          max: 10
        },
        {
          id: 4,
          text: "Are you happy?",
          max: 10
        },
        {
          id: 5,
          text: "How oft do you exercise? (per week)",
          max: 7
        }
      ]
    };
    this.calculateScore = this.calculateScore.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  static navigationOptions = {
    title: "Quiz"
  };

  calculateScore() {
    console.log("reached");
  }

  nextQuestion = () => {
    let currentQuestion = this.state.currentQuestion + 1;
    if (currentQuestion > this.state.QuestionsArray.length) {
      calculateScore();
    } else {
      this.setState({ currentQuestion: currentQuestion });
    }
  };

  render() {
    const { selectedIndex, currentQuestion } = this.state;

    const ques = this.state.QuestionsArray.filter(
      ques => ques.id === currentQuestion
    )[0];

    const buttons = Array.from({ length: ques.max }, (v, k) => k + 1);
    const questionText = ques.text;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.quizLabel}>Quiz</Text>
        <Text style={styles.questionLabel}>{questionText}</Text>
        <ButtonGroup
          containerStyle={styles.buttonContainer}
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 40 }}
        />
        <Button
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyle}
          title="NEXT"
          onPress={this.nextQuestion}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  quizLabel: {
    fontSize: 20,
    color: "#000",
    marginLeft: 16
  },
  questionLabel: {
    marginTop: 18,
    width: "100%",
    color: "#000",
    fontSize: 30,
    textAlign: "center"
  },
  buttonStyle: {
    width: 200,
    backgroundColor: "#000"
  },
  buttonContainer: {
    marginTop: 200,
    alignItems: "center"
  },

  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff"
  }
});
