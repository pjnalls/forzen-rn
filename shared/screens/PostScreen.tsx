import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Image, Platform } from "react-native";

import { Text, View } from "../../components/Themed";
import { sources } from "../../data/sources";
import { styles } from "../../shared/styles/Post.styles";
import { Post } from "../../types";

export const PostScreen: FC<Post> = ({
  title,
  imageName,
  description,
}: Post) => (
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
