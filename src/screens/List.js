import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemComponent from "../components/ItemComponent";
import firebase from "../config";
import "firebase/firestore";

const db = firebase.firestore();

export default class List extends Component {
  state = {
    items: ["Initial value beofre mount"]
  };

  componentDidMount() {
    let items = [];
    const itemsRef = db.collection("items");
    itemsRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.setState({
          items: [...this.state.items, doc.data().name]
        })
      });
    });
  }

  render() {
    console.log("rendered", this.state.items)
    return (
      <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} />
        ) : (
            <Text>No items</Text>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ebebeb"
  }
});
