import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { RootStackScreenProps } from "../types";

export const NotFoundScreen: FC<RootStackScreenProps<"NotFound">> = ({
  navigation,
}: RootStackScreenProps<"NotFound">) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={{ ...styles.linkText, color: Colors[colorScheme].tint }}>
          Go to home screen!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
  },
});
