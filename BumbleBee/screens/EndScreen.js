import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image
} from "react-native";
import { Button, Divider } from "react-native-elements";
import { VictoryPie } from "victory-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import {
  HelvBoldItalText,
  HelvBoldText,
  HelvText
} from "../components/StyledText";
import DraggableList1 from "../components/draggableList1";
import DraggableList2 from "../components/draggableList2";

export default class EndScreen extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    title: "FinanceResults"
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <HelvBoldItalText style={styles.headline}>
            Financial Analysis
          </HelvBoldItalText>

          <Image
            resizeMode="contain"
            source={require("../assets/images/EndScreen.png")}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
    fontSize: 30,
    marginLeft: 20,
    width: "100%",

    color: "#4D4F5C"
  },
  headline: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 40,
    width: "100%",
    textAlign: "center",
    color: "#4D4F5C"
  },
  headline: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 40,
    width: "100%",
    textAlign: "center",
    color: "#4D4F5C"
  },
  border: {
    flex: 1,
    margin: 10,
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 8,

    padding: 10,
    borderColor: "#00387D",
    alignItems: "center"
  },

  item: {
    flex: 1,
    width: 60,
    height: 60,

    padding: 10
  },
  buttonContainer: {
    alignItems: "center",
    paddingBottom: 16
  },
  buttonStyle: {
    width: 200,
    backgroundColor: "#00387D"
  },
  row: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row"
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
