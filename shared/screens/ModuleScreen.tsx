import { FC } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { styles } from "../styles/ModuleScreen.styles";

import { IndividuationDescription } from "../../components/individuations/IndividuationDescription";
import { MeditationDescription } from "../../components/meditations/MeditationDescription";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { sources } from "../../data/sources";
import useColorScheme from "../../hooks/useColorScheme";
import { ModuleScreenProps, RootTabScreenProps } from "../../types";

export const ModuleScreen: FC<{
  navigation: RootTabScreenProps<"Module">;
  moduleScreen: ModuleScreenProps;
}> = (props) => {
  const { title, posts, postType } = props.moduleScreen;
  const navigation = props.navigation as any;
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
            <Text style={styles.title}>{title}</Text>
            <View
              style={styles.separator}
              lightColor="#d1d9bf"
              darkColor="rgba(255,255,255,0.1)"
            />
            {postType === "Individuation" ? (
              <IndividuationDescription />
            ) : (
              <MeditationDescription />
            )}
            <View
              style={styles.separator}
              lightColor="rgba(255,255,255,0)"
              darkColor="rgba(255,255,255,0)"
            />
            {posts.map((post) => (
              <View
                style={{ backgroundColor: "transparent" }}
                key={`${postType}-${post.imageName}`}
              >
                <View
                  style={styles.imageSeparator}
                  lightColor="rgba(255,255,255,0)"
                  darkColor="rgba(255,255,255,0)"
                />
                <Pressable
                  onPress={() =>
                    navigation.navigate(`${postType} Post`, {
                      ...post,
                    })
                  }
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                >
                  <Image
                    source={sources.get(post.imageName)}
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
};
