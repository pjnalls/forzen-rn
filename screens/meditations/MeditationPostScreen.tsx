import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function MeditationPostScreen(title: string, imageUri: string) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beside Still Waters</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/park.jpg")}
        resizeMode="center"
      />
      <Text style={styles.separator}>
        {"\t"}In society, it seems as if the meaning of "life balance" is waling on a
        tightrope suspened high above in the air — a superhuman feat; yet,
        through the activation of higher levels of conciousness, one can walk a
        broad middle path — unconditional leisure through a park on a trail
        parallel, beside still waters.
      </Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  image: {
    width: "100%",
    height: 365,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
  },
});
