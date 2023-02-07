import { ImageBackground, StyleSheet } from "react-native";

import HomeScreenInfo from "../components/HomeScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <ImageBackground
      source={require("../assets/images/park.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Forzen.io</Text>
        <Text style={styles.subtitle1}>
          Expand your <Text style={styles.subtitle2}>Zenful</Text> inner skies.
        </Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <HomeScreenInfo />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f9dfe9",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#c31654",
    fontSize: 33.333,
    fontWeight: "bold",
  },
  subtitle1: {
    color: "#997d7d",
    fontSize: 20,
    fontWeight: "normal",
  },
  subtitle2: {
    color: "##717e54",
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
