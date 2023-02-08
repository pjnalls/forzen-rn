import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function IndividuationPostScreen(
  title: string,
  imageUri: string
) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfect Imperfections</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/individuations/sunrise.jpg")}
        resizeMode="center"
      />
      <Text style={styles.separator}>
        {"\t"}As you meditatively experience those brief moments of the rising
        and setting of the sun in the early mornings and evenings, you begin to
        realize that there is such a thing as perfection — perfect
        imperfections: a beautiful phenomena beyond your understanding yet you
        can feel and know its there.
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

