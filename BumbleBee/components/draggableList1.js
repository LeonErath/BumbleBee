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
import DraggableFlatList from "react-native-draggable-flatlist";
import {
  HelvBoldItalText,
  HelvBoldText,
  HelvText
} from "../components/StyledText";

export default class DraggableList1 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          key: "id1",
          label: 1,
          content: "Wohnen",
          image: require("../assets/images/Saldo/10.png")
        },
        {
          key: "id2",
          label: 2,
          content: "Versicherung",
          image: require("../assets/images/Saldo/9.png")
        },
        {
          key: "id3",
          label: 3,
          content: "Lebenshaltung",
          image: require("../assets/images/Saldo/11.png")
        },
        {
          key: "id4",
          label: 4,
          content: "Kommunikation",
          image: require("../assets/images/Saldo/12.png")
        },
        {
          key: "id5",
          label: 5,
          content: "Mobilität",
          image: require("../assets/images/Saldo/7.png")
        },
        {
          key: "id6",
          label: 6,
          content: "Pension",
          image: require("../assets/images/Saldo/8.png")
        }
      ]
    };
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 16,
          marginTop: 4,
          marginBottom: 4,
          marginRight: 32,
          width: "100%",
          height: 40,
          justifyContent: "center",

          backgroundColor: isActive ? "#f2f2f2" : "#fff"
        }}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            resizeMode="contain"
            source={item.image}
            style={{ width: 40, height: 40, flex: 1, alignSelf: "flex-start" }}
          />
          <Text
            style={{
              flex: 3,
              paddingLeft: 16,
              color: "#000",
              fontSize: 20
            }}
          >
            {item.content}
          </Text>
          <Image
            resizeMode="contain"
            source={require("../assets/images/Saldo/menu.png")}
            style={{ width: 40, height: 40, alignSelf: "flex-end", flex: 1 }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  static navigationOptions = {
    title: "DraggableList"
  };

  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          scrollPercent={5}
          onMoveEnd={({ data }) => this.setState({ data: data })}
        />
      </View>
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
