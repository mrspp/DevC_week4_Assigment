import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SingleTodo = ({ route }) => {
  const { updatedTodo } = route.params;
  const { id, status, body } = updatedTodo;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {id}. {status}
      </Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

SingleTodo.navigationOptions = {
  title: "SingleTodo",
};

export default SingleTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
  },
  headerText: {
    fontSize: 30,
    color: "red",
  },
  bodyText: {
    fontSize: 16,
  },
});
