import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import { Input, Button } from "react-native-elements";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/LoginBackground.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Input
            underlineColorAndroid="transparent"
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholder="Username..."
            leftIcon={{ type: "font-awesome", name: "user" }}
          />
          <Input
            underlineColorAndroid="transparent"
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholder="Password..."
            leftIcon={{ type: "font-awesome", name: "key" }}
          />
          <View style={styles.helpContainer}>
            <Button
              onPress={this._handleHelpPress}
              style={styles.buttonStyle}
              title="LOG IN"
            />
          </View>
        </View>
      </ImageBackground>
    );
  }

  _handleHelpPress = () => {
    this.props.navigation.navigate("EntryQuiz");
  };
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 16
  },

  inputContainer: {
    borderRadius: 4,
    marginTop: 16,
    backgroundColor: "#fff"
  },

  container: {
    flex: 1,
    marginTop: 140,
    marginLeft: 40,
    marginRight: 40
  },

  helpContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center"
  },

  buttonStyle: {
    width: 120,
    padding: 8
  }
});
