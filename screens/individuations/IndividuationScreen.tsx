import { Image, ImageBackground, Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

export default function IndividuationScreen({
  navigation,
}: RootTabScreenProps<"Individuation">) {
  return (
    <ImageBackground
      source={require("../../assets/images/snowfall.jpg")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Individuation</Text>
        <Pressable
          onPress={() =>
            navigation.navigate("Individuation Post", {
              title: "Test",
              imageUri: "../../assets/images/individuations/rainbow.jpg",
            })
          }
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Image
            source={require("../../assets/images/individuations/sunrise.jpg")}
            resizeMode="cover"
            style={styles.image}
          />
        </Pressable>
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
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    top: 16,
    width: 133,
    height: 133,
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
