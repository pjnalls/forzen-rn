import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import IndividuationScreenDescription from "../../components/individuations/IndividuationScreenDescription";

import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { individuations } from "../../data/individuation";
import { sources } from "../../data/sources";
import useColorScheme from "../../hooks/useColorScheme";
import { RootTabScreenProps } from "../../types";

export default function IndividuationScreen({
  navigation,
}: RootTabScreenProps<"Individuation">) {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={sources.get("snowfall")}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={{
          overlayColor: Colors[colorScheme].background,
          opacity: colorScheme === "dark" ? 0.2 : 0.123,
        }}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <>
            <Text style={styles.title}>Individuation</Text>
            <View
              style={styles.separator}
              lightColor="#d1d9bf"
              darkColor="rgba(255,255,255,0.1)"
            />
            <IndividuationScreenDescription />
            <View
              style={styles.separator}
              lightColor="#rgba(255,255,255,0)"
              darkColor="rgba(255,255,255,0)"
            />
            {individuations.map((individuation, index) => (
              <View key={`i-${index}-${individuation.imageName}`}>
                <View
                  style={styles.imageSeparator}
                  lightColor="#rgba(255,255,255,0)"
                  darkColor="rgba(255,255,255,0)"
                  
                />
                <Pressable
                  onPress={() =>
                    navigation.navigate("Individuation Post", {
                      ...individuation,
                    })
                  }
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                  
                >
                  <Image
                    source={sources.get(individuation.imageName)}
                    style={styles.image}
                  />
                </Pressable>
              </View>
            ))}
            <View
              style={styles.separator}
              lightColor="#rgba(255,255,255,0)"
              darkColor="rgba(255,255,255,0)"
            />
          </>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 16,
  },
  scrollView: {
    marginHorizontal: 20,
    backgroundColor: "transparent",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    top: 16,
    width: Dimensions.get("window").width - 16,
    height: Dimensions.get("window").width - 16,
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  title: {
    marginTop: 36,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    alignSelf: "center",
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  imageSeparator: {
    padding: 4,
    width: "80%",
    backgroundColor: "transparent",
  },
});