import * as React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageStore,
  StyleSheet,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import firebase from "../database/firestoreDB";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// const times = ["08", "09", "10", "11", "12", "13", "14"];
const times = [
  {
    time: "08",
  },
  {
    time: "09",
  },
  {
    time: "10",
  },
  {
    time: "11",
  },
  {
    time: "12",
  },
  {
    time: "13",
  },
  {
    time: "14",
  },
];
const temperatures = ["36.7", "36.2", "36.1", "36.7", "37.0", "36.9", "36.6"];
const weeks = [];

function timeLog(times, temperature) {
  return (
    <ScrollView horizontal={true}>
      <View style={{ flexDirection: "col" }}>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          {times.map((item, key) => (
            <Text
              style={{
                marginRight: 50,
                fontSize: 15,
                fontWeight: "bold",
                marginStart: 10,
              }}
            >
              {item.time}
            </Text>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {temperature.map((item, key) => (
            <Text
              style={{ marginStart: 10, marginBottom: 10, marginRight: 40 }}
            >
              {item}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

function weeklyLog() {
  var today = new Date();
  for (var index = 1; index <= 7; index++) {
    let weekObj = {
      date: today.getDate() - index,
      month: "June",
      temperature: temperatures[index - 1],
    };
    // weeks.push(today.getDate() - index);
    weeks.push(weekObj);
  }

  return (
    <ScrollView horizontal={true} style={{ marginVertical: 10 }}>
      <View style={{ flexDirection: "row" }}></View>
      {weeks.map((item, key) => (
        <TouchableOpacity
          style={[{ backgroundColor: "#51EC38" }, styles.category]}
        >
          <Text
            style={{ marginHorizontal: 20, fontSize: 10, fontWeight: "bold" }}
          >
            {item.date} {item.month}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
            {item.temperature}°C
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default function MonitorScreen() {
  function renderHeader() {
    return (
      <View style={styles.headerRectangle}>
        <Image
          source={require("../images/temp_screen.png")}
          style={{ width: 220, height: 210, marginTop: 25 }}
        ></Image>
        <View style={{ flexDirection: "column", marginTop: 70 }}>
          <Text
            style={{
              fontSize: 50,
              marginRight: 40,
              color: "#1AC62B",
            }}
          >
            36.4 °C
          </Text>
          <Text style={{ fontSize: 10 }}>Last Check 15:34 today</Text>
        </View>
      </View>
    );
  }
  return (
    <ScrollView style={{ backgroundColor: "#F5FF80" }}>
      <View>{renderHeader()}</View>
      <View style={[styles.displayPanel]}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Feather
              name="camera"
              size={50}
              color="black"
              style={{ marginLeft: 30, marginTop: 20 }}
            />
          </TouchableOpacity>

          <Text style={[styles.title, { marginTop: 30 }]}>
            Check My Temperature
          </Text>
        </View>
        <View>
          <Text style={[styles.title, { marginTop: 40, fontSize: 30 }]}>
            Today
          </Text>
          <View style={styles.line}></View>
          {timeLog(times, temperatures)}
          <View style={styles.line}></View>
        </View>
        <View>
          <Text style={[styles.title, { marginTop: 40, fontSize: 30 }]}>
            Weekly Logs
          </Text>
          {weeklyLog()}
        </View>

        {/* This closing view is for the display panel */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRectangle: {
    flex: 1,
    backgroundColor: "#F5FF80",
    width: "100%",
    height: 200,
    justifyContent: "center",
    flexDirection: "row",
  },
  displayPanel: {
    backgroundColor: "white",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    width: "100%",
    height: 550,
    alignSelf: "flex-end",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  category: {
    width: 100,
    height: 100,
    paddingTop: 5,
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  familyText: {
    marginVertical: 10,
    marginLeft: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  family: {
    width: 150,
    height: 80,
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  line: {
    marginVertical: 10,
    backgroundColor: "darkgrey",
    width: "100%",
    height: 2,
  },
});
