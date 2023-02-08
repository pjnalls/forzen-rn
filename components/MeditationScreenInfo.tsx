import * as WebBrowser from "expo-web-browser";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";

export default function MeditationScreenInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
          When refering to meditations at Forzen, we're interested in daily
          meditative practices, whether traditional or individualistic styles of
          deepening one's ecological awareness of the self in relation to its
          environment.
          {"\n\n"}
          We focus our energy on staying meditative throughout the day, and
          letting these meditations be a reminder of a tuning to a point of
          singularity for daily, consistent focus.
          {"\n\n"}
          Disclaimer: The following content is not a subsititution for
          professional medical or mental health services and is based on
          personal research, education, and observations for inspirational and
          entertainment purposes only.
        </Text>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    backgroundColor: "transparent",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "left",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
