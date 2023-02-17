import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { styles } from "../../shared/styles/ModuleScreen.styles";
import IndividuationDescription from "../../components/individuations/IndividuationDescription";

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
            <IndividuationDescription />
            <View
              style={styles.separator}
              lightColor="rgba(255,255,255,0)"
              darkColor="rgba(255,255,255,0)"
            />
            {individuations.map((individuation) => (
              <View
                style={{ backgroundColor: "transparent" }}
                key={`i-${individuation.imageName}`}
              >
                <View
                  style={styles.imageSeparator}
                  lightColor="rgba(255,255,255,0)"
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
              lightColor="rgba(255,255,255,0)"
              darkColor="rgba(255,255,255,0)"
            />
          </>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
