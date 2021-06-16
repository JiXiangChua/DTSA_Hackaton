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
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

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
            style={[
              { backgroundColor: "#EB8383", alignItems: "center" },
              styles.category,
            ]}
          >
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Georgia",
              }}
            >
              Daily Cases:
            </Text>
            <Text
              style={{ fontSize: 40, color: "#EAEE1B", fontWeight: "bold" }}
            >
              19
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#F6BA72",
                justifyContent: "center",
                alignItems: "center",
              },
              styles.category,
            ]}
          >
            <Image
              source={require("../images/safeEntry.jpeg")}
              style={{ width: 80, height: 80 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#80F3D8",
                justifyContent: "center",
                alignItems: "center",
              },
              styles.category,
            ]}
          >
            <Image
              source={require("../images/health_hub.png")}
              style={{ width: 80, height: 80 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#83B3EB",
                justifyContent: "center",
                alignItems: "center",
              },
              styles.category,
            ]}
          >
            <Image
              source={require("../images/telegram2.png")}
              style={{ width: 80, height: 80 }}
            ></Image>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.familyText}>
          Family Members{"           "}
          <TouchableOpacity>
            <AntDesign name="plussquare" size={30} color="#DD5CD0" />
          </TouchableOpacity>
        </Text>

        <View style={{ margin: 10, alignItems: "center" }}>
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
              <Text
                style={{
                  marginRight: 180,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                No exposure alerts
              </Text>
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
              <Text
                style={{
                  marginRight: 180,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                No exposure alerts
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: 10, alignItems: "center" }}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#67FC32", "#D9FFCC", "#fff"]}
              style={styles.family}
            >
              <Image
                source={require("../images/female_user.png")}
                style={{ width: 50, height: 50 }}
              ></Image>
              <Text style={{ margin: 10, fontWeight: "bold" }}>DAUGHTER</Text>

              <FontAwesome name="check-circle" size={24} color="darkgreen" />
              <Text
                style={{
                  marginRight: 180,
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                No exposure alerts
              </Text>
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
              <Text
                style={{ marginRight: 140, fontWeight: "bold", marginLeft: 20 }}
              >
                This member has visited a COVID-19 case location.
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={[styles.familyText, { padding: 20 }]}>
            Covid Cluster
          </Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 1.310882,
              longitude: 103.80666,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
          >
            <Marker
              coordinate={{ latitude: 1.3521, longitude: 103.8198 }}
              title={"Number of cases:"}
              description={"6"}
            />
            <Marker
              coordinate={{ latitude: 1.32159, longitude: 103.84591 }}
              title={"Number of cases:"}
              description={"29"}
            />
            <Marker
              coordinate={{ latitude: 1.36466, longitude: 103.99151 }}
              title={"Number of cases:"}
              description={"31"}
            />
            <Marker
              coordinate={{ latitude: 1.33304, longitude: 103.74331 }}
              title={"Number of cases:"}
              description={"18"}
            />
          </MapView>
        </View>

        {/* This closing view is for the display panel */}
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
    marginTop: 20,
  },
  category: {
    width: 80,
    height: 80,
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  familyText: {
    marginVertical: 10,
    marginLeft: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  family: {
    width: 300,
    height: 80,
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "grey",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "95%",
    height: 400,
    marginBottom: 30,
    borderRadius: 20,
    borderColor: "darkgrey",
    borderWidth: 0.5,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
});
