import { ImageBackground, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function IndividuationScreen({
  navigation,
}: RootTabScreenProps<"Individuation">) {
  return (
    <ImageBackground
      source={require("../assets/images/snowfall.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Individuation</Text>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "transparent",
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
