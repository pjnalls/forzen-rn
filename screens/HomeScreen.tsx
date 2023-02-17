import { ImageBackground, StyleSheet } from "react-native";

import HomeDescription from "../components/HomeDescription";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { sources } from "../data/sources";
import useColorScheme from "../hooks/useColorScheme";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <ImageBackground
      source={sources.get("park")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={{ ...styles.title, color: Colors[colorScheme].tint }}>
          Forzen.io
        </Text>
        <Text style={styles.subtitle1}>
          Expand your{" "}
          <Text
            style={{
              ...styles.subtitle2,
              color: colorScheme === "light" ? "#717e54" : "#f1fed4",
            }}
          >
            Zenful
          </Text>{" "}
          inner skies.
        </Text>
        <View
          style={{
            ...styles.separator,
            borderColor:
              colorScheme === "light" ? "#d1d9bf" : "rgba(255,255,255,0.1)",
          }}
        />
        <HomeDescription />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 33.333,
    fontWeight: "bold",
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: "normal",
    textAlign: "center"
  },
  subtitle2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
