import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import { Button, Overlay, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  HelvBoldItalText,
  HelvBoldText,
  HelvText,
  MonoText
} from "../components/StyledText";

export default class LifeAnalyseLite extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStatement: 0,
      counter1: 0,
      counter2: 0,
      counter3: 0,
      isVisible: false,
      instagramLoading: false,
      instagramSuccess: false,
      xingLoading: false,
      xingSuccess: false,
      locationLoading: false,
      locationSuccess: false,
      xingLoading: false,
      locationLoading: false,
      allAcceppted: false,
      analsis: []
    };

    this.checkAccepted = this.checkAccepted.bind(this);
    this.makeApiCalls = this.makeApiCalls.bind(this);
  }

  static navigationOptions = {
    title: "LifeAnalyseLite"
  };

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  componentWillUnmount() {
    this.setState({ isVisible: false });
  }

  requestInstagram = () => {
    let counter = this.state.counter1 + 1;

    if (counter >= 2) {
      this.setState({
        instagramSuccess: true,
        instagramLoading: !this.state.instagramLoading,
        counter1: counter
      });
      this.checkAccepted(
        this.state.locationSuccess,
        true,
        this.state.xingSuccess
      );
    } else {
      this.setState({
        instagramLoading: !this.state.instagramLoading,
        counter1: counter
      });
    }
  };

  requestXing = () => {
    let counter = this.state.counter2 + 1;

    if (counter >= 2) {
      this.setState({
        xingSuccess: true,
        xingLoading: !this.state.xingLoading,
        counter2: counter
      });
      this.checkAccepted(
        this.state.locationSuccess,
        this.state.instagramSuccess,
        true
      );
    } else {
      this.setState({
        xingLoading: !this.state.xingLoading,
        counter2: counter
      });
    }
  };

  requestLocation = () => {
    let counter = this.state.counter3 + 1;

    if (counter >= 2) {
      this.setState({
        locationSuccess: true,
        locationLoading: !this.state.locationLoading,
        counter3: counter
      });
      this.checkAccepted(
        true,
        this.state.instagramSuccess,
        this.state.xingSuccess
      );
    } else {
      this.setState({
        locationLoading: !this.state.locationLoading,
        counter3: counter
      });
    }
  };

  makeApiCalls() {
    fetch("http://10.0.2.2:4000/getLifeAnalysisLite")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ analsis: responseJson.statements });
      })
      .catch(error => {
        console.error(error);
      });
  }

  checkAccepted(locationSuccess, instagramSuccess, xingSuccess) {
    console.log(locationSuccess, instagramSuccess, xingSuccess);
    if (locationSuccess && instagramSuccess && xingSuccess) {
      this.setState({ allAcceppted: true, isVisible: false });
      this.makeApiCalls();
    }
  }

  nextStatement = () => {
    let currentStatement = this.state.currentStatement + 1;
    if (currentStatement >= this.state.analsis.length) {
      this.props.navigation.navigate("FinanceScreen");
    } else {
      this.setState({ currentStatement: currentStatement });
    }
  };

  render() {
    const { currentStatement } = this.state;
    let image1 = require("../assets/images/Analyse1.png");
    let image2 = require("../assets/images/Analyse2.png");
    let image3 = require("../assets/images/Analyse3.png");
    let image;
    if (currentStatement === 0) {
      image = image1;
    } else if (currentStatement === 1) {
      image = image2;
    } else {
      image = image3;
    }

    return (
      <View style={styles.container}>
        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <View>
            <Text style={styles.textNotifier}>Data Request!</Text>
            <Text style={styles.subline}>
              In order to provide a high-quality data analysis, the data of your
              social media channels will be accessed. After the release of all
              channels, the life improvement analysis begins.
            </Text>
            <Button
              buttonStyle={styles.buttonStyle}
              iconContainerStyle={{ marginRight: 10 }}
              icon={
                this.state.instagramSuccess && (
                  <Icon name="check" size={15} color="white" />
                )
              }
              title="Instagram"
              type={this.state.instagramSuccess ? "solid" : "outline"}
              onPress={this.requestInstagram}
              loading={this.state.instagramLoading}
            />
            <Button
              buttonStyle={styles.buttonStyle}
              iconContainerStyle={{ marginRight: 10 }}
              icon={
                this.state.xingSuccess && (
                  <Icon name="check" size={15} color="white" />
                )
              }
              title="Xing"
              type={this.state.xingSuccess ? "solid" : "outline"}
              onPress={this.requestXing}
              loading={this.state.xingLoading}
            />
            <Button
              buttonStyle={styles.buttonStyle}
              iconContainerStyle={{ marginRight: 10 }}
              icon={
                this.state.locationSuccess && (
                  <Icon name="check" size={15} color="white" />
                )
              }
              title="Location"
              type={this.state.locationSuccess ? "solid" : "outline"}
              onPress={this.requestLocation}
              loading={this.state.locationLoading}
            />

            <Button
              buttonStyle={styles.buttonStyle}
              title="Close"
              onPress={() => this.setState({ isVisible: false })}
              type="clear"
            />
          </View>
        </Overlay>

        {this.state.allAcceppted && (
          <ImageBackground
            source={image}
            style={{ height: "100%", width: "100%" }}
          >
            <HelvBoldItalText style={styles.headline}>
              Life Analysis
            </HelvBoldItalText>
            <View style={{ marginTop: 240 }}>
              {this.state.analsis != undefined &&
                this.state.analsis.length != 0 && (
                  <Text style={styles.resultText}>
                    {this.state.analsis[this.state.currentStatement].text}{" "}
                  </Text>
                )}

              <Button
                onPress={() => this.nextStatement()}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonNext}
                type={"outline"}
                title={
                  this.state.currentStatement >= 3
                    ? "Add Financial Analysis"
                    : "Next Statement"
                }
              />
            </View>
          </ImageBackground>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 8,
    marginTop: 8
  },

  buttonContainer: {
    marginBottom: 20,
    marginTop: 16,
    alignItems: "center",
    color: "#000"
  },
  buttonNext: {
    width: 200,
    backgroundColor: "#fff",
    color: "#000"
  },

  cardView: {},
  resultText: {
    fontSize: 18,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#fff"
  },

  headline: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 40,
    width: "100%",
    textAlign: "center",
    color: "#fff"
  },

  subline: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    lineHeight: 24,
    color: "rgba(96,100,109, 1)"
  },
  textNotifier: {
    fontSize: 30,
    marginTop: 8,
    textAlign: "center"
  },

  buttonStyle: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16
  },

  container: {
    flex: 1,

    paddingTop: 15
  }
});
