import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import MonitorScreen from "./Screens/MonitorScreen";
import VaccineScreen from "./Screens/VaccineScreen";
import NewsScreen from "./Screens/NewsScreen";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              return <FontAwesome5 name="home" size={24} color={color} />;
            } else if (route.name === "Monitor") {
              return <FontAwesome5 name="eye" size={24} color={color} />;
            } else if (route.name === "Vaccine") {
              return <FontAwesome5 name="syringe" size={24} color={color} />;
            } else if (route.name === "News") {
              return (
                <MaterialCommunityIcons
                  name="newspaper-variant-outline"
                  size={24}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Monitor" component={MonitorScreen} />
        <Tab.Screen name="Vaccine" component={VaccineScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
