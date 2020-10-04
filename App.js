import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";

import AllStack from "./screens/All";
import Completed from "./screens/Completed";
import Active from "./screens/Active";
import SingleTodo from "./screens/SingleTodo";

import styles from "./styles";

const Tab = createBottomTabNavigator();

const routeIcons = {
  Completed: "ios-done-all",
  All: "ios-add-circle-outline",
  Active: "ios-options",
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={routeIcons[route.name]}
              size={24}
              color={focused ? "blue" : "grey"}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen name="All" component={AllStack} />
        <Tab.Screen name="Completed" component={Completed} />
        <Tab.Screen name="Active" component={Active} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
