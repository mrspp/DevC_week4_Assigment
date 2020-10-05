import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "../styles";
import TODOS from "../todos";
import SingleTodo from "./SingleTodo";

// const All = () => {
//   return (
//     <View style={styles.allWrapper}>
//       <SafeAreaView>
//         <FlatList
//           data={TODOS}
//           keyExtractor={(item) => {
//             item.id;
//           }}
//           key={(item) => item.id}
//           renderItem={({ item }) => (
//             <Onefeed
//               index={item.id}
//               body={item.body}
//               key={item.id}
//               //onPress={() => navigation.navigate("Conversation", item)}
//             />
//           )}
//         />
//       </SafeAreaView>
//     </View>
//   );
// };
const Stack = createStackNavigator();

const All = (props) => {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState("");

  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: "Active",
      id: todoList.length + 1,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody("");
  };

  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    const foundIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
    setTimeout(() => {
      props.navigation.navigate("SingleTodo", {
        updatedTodo: todo,
      });
    }, 500);
  };

  return (
    <View style={styles.container}>
      {todoList.map((todo, idx) => {
        return (
          <TodoItem
            idx={idx}
            todo={todo}
            key={todo.body}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        );
      })}
      <View style={styles.inputContainer}>
        <TextInput
          value={todoBody}
          style={styles.todoInput}
          onChangeText={(text) => setTodoBody(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Onefeed = ({ index, body }) => {
  return (
    <View style={styles.allContent}>
      <Text key={{ index }}>
        {index}. {body}
      </Text>
    </View>
  );
};

const TodoItem = (props) => {
  const onLongPress = (todo) => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      "Delete your todo?",
      prompt,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => props.onDeleteTodo(todo.id) },
      ],
      { cancelable: true }
    );
  };
  const statusStyle = {
    backgroundColor: props.todo.status === "Done" ? "blue" : "green",
  };
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(props.todo)}
      onPress={() => props.onToggleTodo(props.todo.id)}
      key={props.todo.body}
      style={[styles.todoItem, statusStyle]}
    >
      <Text style={styles.todoText}>
        {props.idx + 1}: {props.todo.body}
      </Text>
    </TouchableOpacity>
  );
};

const AllStack = () => {
  return (
    <Stack.Navigator initialRouteName={All}>
      <Stack.Screen name="All" component={All} />
      <Stack.Screen name="SingleTodo" component={SingleTodo} />
    </Stack.Navigator>
  );
};

export default AllStack;
