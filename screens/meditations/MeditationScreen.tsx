import { FC } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { styles } from "../../shared/styles/ModuleScreen.styles";
import { MeditationDescription } from "../../components/meditations/MeditationDescription";

import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { meditations } from "../../data/meditations";
import { sources } from "../../data/sources";
import useColorScheme from "../../hooks/useColorScheme";
import { RootTabScreenProps } from "../../types";

export const MeditationScreen: FC<RootTabScreenProps<"Meditation">> = ({
  navigation,
}: RootTabScreenProps<"Meditation">) => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={sources.get("space")}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={{
          overlayColor: Colors[colorScheme].background,
          opacity: colorScheme === "dark" ? 0.2 : 0.123,
        }}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <>
            <Text style={styles.title}>Meditation</Text>
            <View
              style={styles.separator}
              lightColor="#d1d9bf"
              darkColor="rgba(255,255,255,0.1)"
            />
            <MeditationDescription />
            <View
              style={styles.separator}
              lightColor="rgba(255,255,255,0)"
              darkColor="rgba(255,255,255,0)"
            />
            {meditations.map((meditation) => (
              <View
                style={{ backgroundColor: "transparent" }}
                key={`m-${meditation.imageName}`}
              >
                <View
                  style={styles.imageSeparator}
                  lightColor="rgba(255,255,255,0)"
                  darkColor="rgba(255,255,255,0)"
                />
                <Pressable
                  onPress={() =>
                    navigation.navigate("Meditation Post", {
                      ...meditation,
                    })
                  }
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                >
                  <Image
                    source={sources.get(meditation.imageName)}
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
