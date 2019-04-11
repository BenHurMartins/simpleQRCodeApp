import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Page</Text>
        <Button
          title={"Scan QRCode"}
          onPress={() => this.props.navigation.navigate("QRCodeScannerScreen")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
