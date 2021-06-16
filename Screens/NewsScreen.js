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
  Linking,
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
import { Card } from "react-native-shadow-cards";

var newsImage = ["../images/news_covid_1.jpeg", "../images/news_covid_2.jpeg"];
var newsURL = [
  "https://www.channelnewsasia.com/news/singapore/covid-19-new-cases-june-16-community-unlinked-imported-moh-15024090",
  "https://www.channelnewsasia.com/news/singapore/covid-19-vaccination-companies-days-off-employees-side-effects-15011686",
  "https://www.channelnewsasia.com/news/singapore/covid-19-task-force-evaluating-the-timing-and-scope-reopening-15025980",
  "https://www.channelnewsasia.com/news/singapore/massage-parlours-closed-10-days-customer-not-wearing-mask-15026482",
  "https://www.channelnewsasia.com/news/singapore/covid-19-diy-test-sales-start-pharmacies-more-customers-15025730",
  "https://www.channelnewsasia.com/news/singapore/maid-unlinked-covid-19-tested-regional-screening-centre-rsc-15020432",
];

export default function NewsScreen() {
  function renderHeader() {
    return (
      <View style={styles.headerRectangle}>
        <Image
          source={require("../images/News.png")}
          style={{
            width: "80%",
            height: 150,
            marginTop: 25,
            alignItems: "center",
            alignContent: "center",
          }}
        ></Image>
      </View>
    );
  }
  return (
    <ScrollView style={{ backgroundColor: "#77D9EF" }}>
      <View>{renderHeader()}</View>
      <View style={styles.displayPanel}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.title}>Updates on the</Text>
          <Text style={styles.title}>Latest Covid Situation</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          {/* First Headline */}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(newsURL[0]);
            }}
          >
            <Card
              style={{
                padding: 10,
                margin: 10,
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../images/news_covid_" + 1 + ".jpeg")}
                style={{
                  width: 80,
                  height: 50,
                  alignItems: "center",
                  alignContent: "center",
                  borderRadius: 5,
                  marginRight: 20,
                }}
              ></Image>

              <Text style={{ marginRight: 90, fontWeight: "bold" }}>
                19 new COVID-19 community cases in Singapore, including three
                unlinked
              </Text>
            </Card>
          </TouchableOpacity>

          {/* Second Headline */}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(newsURL[1]);
            }}
          >
            <Card
              style={{
                padding: 10,
                margin: 10,
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../images/news_covid_" + 2 + ".jpeg")}
                style={{
                  width: 80,
                  height: 50,
                  alignItems: "center",
                  alignContent: "center",
                  borderRadius: 5,
                  marginRight: 20,
                }}
              ></Image>

              <Text style={{ marginRight: 90, fontWeight: "bold" }}>
                Days off, free medical consultations: Comapnies roll out support
                for employees taking COVID-19 vaccine
              </Text>
            </Card>
          </TouchableOpacity>

          {/* 3rd Headline */}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(newsURL[2]);
            }}
          >
            <Card
              style={{
                padding: 10,
                margin: 10,
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../images/news_covid_" + 3 + ".jpeg")}
                style={{
                  width: 80,
                  height: 50,
                  alignItems: "center",
                  alignContent: "center",
                  borderRadius: 5,
                  marginRight: 20,
                }}
              ></Image>

              <Text style={{ marginRight: 90, fontWeight: "bold" }}>
                COVID-19 task force 'evaluating' timing and scope of reopening
                amid fresh outbreak: Lawrence Wong
              </Text>
            </Card>
          </TouchableOpacity>

          {/* 4th Headline */}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(newsURL[3]);
            }}
          >
            <Card
              style={{
                padding: 10,
                margin: 10,
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../images/news_covid_" + 4 + ".jpeg")}
                style={{
                  width: 80,
                  height: 50,
                  alignItems: "center",
                  alignContent: "center",
                  borderRadius: 5,
                  marginRight: 20,
                }}
              ></Image>

              <Text style={{ marginRight: 90, fontWeight: "bold" }}>
                20 massage parlours ordered to close temporarily due to breaches
                of COVID-19 safe management measures
              </Text>
            </Card>
          </TouchableOpacity>

          {/* 5th Headline */}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(newsURL[4]);
            }}
          >
            <Card
              style={{
                padding: 10,
                margin: 10,
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../images/news_covid_" + 5 + ".jpeg")}
                style={{
                  width: 80,
                  height: 50,
                  alignItems: "center",
                  alignContent: "center",
                  borderRadius: 5,
                  marginRight: 20,
                }}
              ></Image>

              <Text style={{ marginRight: 90, fontWeight: "bold" }}>
                Some pharmacies see uptick in customers as sales of DIY COVID-19
                antigen rapid test kits begin
              </Text>
            </Card>
          </TouchableOpacity>

          {/* 6th Headline */}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(newsURL[5]);
            }}
          >
            <Card
              style={{
                padding: 10,
                margin: 10,
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../images/news_covid_" + 6 + ".jpeg")}
                style={{
                  width: 80,
                  height: 50,
                  alignItems: "center",
                  alignContent: "center",
                  borderRadius: 5,
                  marginRight: 20,
                }}
              ></Image>

              <Text style={{ marginRight: 90, fontWeight: "bold" }}>
                Maid who was tested for COVID-19 at a regional screening centre
                should have been taken to doctor first: MOH
              </Text>
            </Card>
          </TouchableOpacity>
        </View>

        {/* This closing view is for the display panel */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRectangle: {
    flex: 1,
    backgroundColor: "#77D9EF",
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
    fontSize: 20,

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
  newsButton: {
    width: "80%",
    height: 100,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0,
    overflow: "hidden",

    // shadowRadius: 10,

    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
});
