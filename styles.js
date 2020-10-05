import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  allWrapper: {
    justifyContent: "center",
    alignItems: "center",
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
    width: "100%",
    minHeight: 30,
    color: "black",
    borderWidth: 1,
    marginTop: "20%",
    marginBottom: "5%",
    borderColor: "grey",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
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
  scrollView: {
    flex: 1,
    paddingTop: 1000,
  },
});

export default styles;
