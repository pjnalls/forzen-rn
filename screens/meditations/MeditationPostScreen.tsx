import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { sources } from "../../data/sources";
import { Post } from "../../types";

export default function MeditationPostScreen({
  title,
  imageName,
  description,
}: Post) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.image}
        source={sources.get(imageName)}
        resizeMode="center"
      />
      <Text>
        {"\t"}
        {description}
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
});
