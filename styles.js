import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  allWrapper: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 0,
  },
  allContent: {
    width: 300,
    borderColor: "blue",
    backgroundColor: "lightgrey",
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: "95%",
    minHeight: 20,
    color: "white",
    borderRadius: 5,
  },
  todoText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  todoInput: {
    width: "95%",
    minHeight: 30,
    color: "black",
    borderWidth: 1,
    marginTop: "20%",
    marginBottom: "5%",
    borderColor: "grey",
  },
  inputContainer: {
    flex: 1,
    width: "90%",
    marginTop: 20,
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "blue",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
