import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Platform, ScrollView } from "react-native";

import { IndividuationInfo } from "../../components/individuations/IndividuationInfo";
import { MeditationInfo } from "../../components/meditations/MeditationInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "../../shared/styles/InfoScreen.styles";
import { Info } from "../../types";

export const InfoScreen: FC<Info> = ({ title, infoType }: Info) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View
      style={styles.separator}
      lightColor="#e1e9cfe9"
      darkColor="rgba(255,255,255,0.1)"
    />
    <ScrollView style={{ marginBottom: 16 }}>
      {infoType === "Individuation" ? (
        <IndividuationInfo />
      ) : (
        <MeditationInfo />
      )}
    </ScrollView>

    {/* Use a light status bar on iOS to account for the black space above the modal */}
    <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
  </View>
);
