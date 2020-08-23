import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

var weatherOptions = {
  Thunderstorm: {
    name: "Thunderstorm",
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "Don't go outside!",
  },
  Drizzle: {
    name: "Drizzle",
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    subtitle: "Bring your umbrella!",
  },
  Rain: {
    name: "Rain",
    iconName: "weather-rainy",
    gradient: ["#4B79A1", "#283E51"],
    subtitle: "Bring your umbrella!",
  },
  Snow: {
    name: "Snow",
    iconName: "weather-snowy",
    gradient: ["#1c92d2", "#f2fcfe"],
    subtitle: "Beware of slipping!",
  },
  Clear: {
    name: "Clear",
    iconName: "white-balance-sunny",
    gradient: ["#FF4E50", "#F9D423"],
    subtitle: "It's sunny day.",
  },
  Clouds: {
    name: "Clouds",
    iconName: "cloud",
    gradient: ["#bdc3c7", "#2c3e50"],
    subtitle: "It's cloudy.",
  },
  Dust: {
    name: "Dust",
    iconName: "weather-hazy",
    gradient: ["#636363", "#a2ab58"],
    subtitle: "Put on a mask.",
  },
  Fog: {
    name: "Fog",
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    subtitle: "Be careful driving.",
  },
  Haze: {
    name: "Haze",
    iconName: "weather-hazy",
    gradient: ["#70e1f5", "#ffd194"],
    subtitle: "Be careful driving.",
  },
  Mist: {
    name: "Mist",
    iconName: "water",
    gradient: ["#50C9C3", "#96DEDA"],
    subtitle: "It's humid.",
  },
  Etc: {
    name: "Etc",
    iconName: "exclamation",
    gradient: ["#373B44", "#4286f4"],
    subtitle: "Don't go outside!",
  },
};

// es6에서 두가지의 object를 함께 쓰는 방법으로 ...이 있다. line 76 참고
export default function Weather({ temp, condition }) {
  if (weatherOptions[condition] === undefined) {
    weatherOptions["Etc"].name = condition;
    condition = "Etc";
  }
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.weather}>{weatherOptions[condition].name}</Text>
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.prototype = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Dust",
    "Haze",
    "Fog",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weather: {
    fontSize: 32,
    color: "white",
    marginBottom: 5,
  },
  temp: {
    fontSize: 20,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1,
  },
});
