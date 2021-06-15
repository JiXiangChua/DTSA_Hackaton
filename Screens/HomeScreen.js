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
import MonitorScreen from "./MonitorScreen";
import VaccineScreen from "./VaccineScreen";
import NewsScreen from "./NewsScreen";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import firebase from "../database/firestoreDB";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  function renderHeader() {
    return (
      <View style={styles.headerRectangle}>
        <Image
          source={require("../images/StayHome.png")}
          style={{ width: 200, height: 170, marginTop: 25 }}
        ></Image>
      </View>
    );
  }
  return (
    <ScrollView style={{ backgroundColor: "#ECB3E6" }}>
      <View>{renderHeader()}</View>
      <View style={styles.displayPanel}>
        <Text style={styles.title}>Category</Text>
        <ScrollView
          style={{ flexDirection: "row", marginTop: 10 }}
          horizontal={true}
        >
          <TouchableOpacity
            style={[{ backgroundColor: "#EB8383" }, styles.category]}
          >
            <Text>Cat 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: "#F6BA72" }, styles.category]}
          >
            <Text>Cat 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: "#80F3D8" }, styles.category]}
          >
            <Text>Cat 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: "#83B3EB" }, styles.category]}
          >
            <Text>Cat 4</Text>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.familyText}>Family Members</Text>

        <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#67FC32", "#D9FFCC", "#fff"]}
              style={styles.family}
            >
              <Image
                source={require("../images/male_user.png")}
                style={{ width: 50, height: 50 }}
              ></Image>
              <Text style={{ margin: 10, fontWeight: "bold" }}>DAD</Text>

              <FontAwesome name="check-circle" size={24} color="darkgreen" />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["#67FC32", "#D9FFCC", "#fff"]}
              style={styles.family}
            >
              <Image
                source={require("../images/female_user.png")}
                style={{ width: 50, height: 50 }}
              ></Image>
              <Text style={{ margin: 10, fontWeight: "bold" }}>MUM</Text>

              <FontAwesome name="check-circle" size={24} color="darkgreen" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#67FC32", "#D9FFCC", "#fff"]}
              style={styles.family}
            >
              <Image
                source={require("../images/female_user.png")}
                style={{ width: 50, height: 50 }}
              ></Image>
              <Text style={{ margin: 10, fontWeight: "bold" }}>DAUGT</Text>

              <FontAwesome name="check-circle" size={24} color="darkgreen" />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["#F87808", "#FCE5D1", "#fff"]}
              style={styles.family}
            >
              <Image
                source={require("../images/male_user.png")}
                style={{ width: 50, height: 50 }}
              ></Image>
              <Text style={{ margin: 10, fontWeight: "bold" }}>SON</Text>

              <AntDesign name="exclamationcircle" size={24} color="darkred" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text style={styles.familyText}>Covid Hot Spots</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRectangle: {
    flex: 1,
    backgroundColor: "#ECB3E6",
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
});
