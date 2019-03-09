import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button, Divider } from "react-native-elements";
import { VictoryPie } from "victory-native";
import {
  HelvBoldItalText,
  HelvBoldText,
  HelvText
} from "../components/StyledText";

export default class SaldoScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static navigationOptions = {
    title: "SaldoScreen"
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <HelvBoldItalText style={styles.headline}>
            Financial Output
          </HelvBoldItalText>

          <HelvBoldText style={styles.section}>Fixed Costs</HelvBoldText>
          <View style={styles.row}>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/1.png")}
                style={styles.item}
              />
            </View>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/2.png")}
                style={styles.item}
              />
            </View>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/3.png")}
                style={styles.item}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/4.png")}
                style={styles.item}
              />
            </View>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/5.png")}
                style={styles.item}
              />
            </View>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/6.png")}
                style={styles.item}
              />
            </View>
          </View>

          <HelvBoldText style={styles.section}>Variable Costs</HelvBoldText>
          <View style={styles.row}>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/7.png")}
                style={styles.item}
              />
            </View>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/8.png")}
                style={styles.item}
              />
            </View>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/9.png")}
                style={styles.item}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/10.png")}
                style={styles.item}
              />
            </View>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/11.png")}
                style={styles.item}
              />
            </View>
            <View style={styles.border}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/Saldo/12.png")}
                style={styles.item}
              />
            </View>
          </View>
        </View>
        <Button
          onPress={() => this.props.navigation.navigate("GoalScreen")}
          title="Add your Goals!"
        />
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
