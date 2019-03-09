import React from "react";
import { Text } from "react-native";

export class MonoText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: "space-mono" }]}
      />
    );
  }
}

export class HelvText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: "helvetica-neue" }]}
      />
    );
  }
}

export class HelvBoldText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: "helvetica-bold" }]}
      />
    );
  }
}

export class HelvBoldItalText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: "helvetica-bold-italic" }]}
      />
    );
  }
}
