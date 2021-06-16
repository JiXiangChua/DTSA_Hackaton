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
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function VaccineScreen() {
  function renderHeader() {
    return (
      <View style={styles.headerRectangle}>
        <Image
          source={require("../images/doctor_art.png")}
          style={{ width: 200, height: 170, marginTop: 40 }}
        ></Image>
      </View>
    );
  }
  return (
    <ScrollView style={{ backgroundColor: "#EEC0A7" }}>
      <View>{renderHeader()}</View>
      <View style={styles.displayPanel}>
        <Text style={styles.title}>Vaccination Progress</Text>

        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <View style={styles.progressBar}>
            <View style={[styles.completedBar, { width: "50%" }]}></View>
          </View>
          <Text style={{ fontWeight: "bold", marginTop: 15 }}>
            {" "}
            1 / 2 Completed{" "}
          </Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "black",
                width: 300,
                height: 100,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../images/Vaccination_cert.jpeg")}
                style={{ width: 300, height: 100, opacity: 0.7 }}
              ></Image>
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  position: "absolute",
                  top: 40,
                }}
              >
                View your Vaccination E-CERT HERE !
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Your Appointments</Text>
        <View style={{ marginVertical: 20 }}>
          <Calendar
            markedDates={{
              "2021-06-30": {
                selected: true,
                marked: true,
                selectedColor: "red",
              },
            }}
            // Specify style for calendar container element. Default = {}
            style={{
              borderWidth: 1,
              borderColor: "gray",
              height: 350,
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              textSectionTitleDisabledColor: "#d9e1e8",
              selectedDayBackgroundColor: "#lightblue",
              selectedDayTextColor: "lightblue",
              todayTextColor: "#00adf5",
              dayTextColor: "#2d4150",
              textDisabledColor: "#d9e1e8",
              dotColor: "#00adf5",
              selectedDotColor: "#ffffff",
              arrowColor: "orange",
              disabledArrowColor: "#d9e1e8",
              monthTextColor: "blue",
              indicatorColor: "blue",
              textDayFontFamily: "monospace",
              textMonthFontFamily: "monospace",
              textDayHeaderFontFamily: "monospace",
              textDayFontWeight: "300",
              textMonthFontWeight: "bold",
              textDayHeaderFontWeight: "300",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          ></Calendar>
        </View>

        {/* This closing view is for the display panel */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRectangle: {
    flex: 1,
    backgroundColor: "#EEC0A7",
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  displayPanel: {
    backgroundColor: "white",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    width: "100%",
    alignSelf: "flex-end",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10,
  },
  category: {
    width: 80,
    height: 80,
    padding: 10,
    margin: 10,
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
  progressBar: {
    width: "70%",
    height: 20,
    backgroundColor: "lightgrey",
  },
  completedBar: {
    height: 20,
    backgroundColor: "#79F319",
  },
});
