import * as WebBrowser from "expo-web-browser";
import { StyleSheet } from "react-native";

import { Text, View } from "../Themed";

export default function MeditationScreenDescription() {
  return (
    <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
          Select an image below for bite-sized meditation.
          {"\n\n"}
          Many of these meditations may overlap with individuations which you
          can view as well. Some meditations may not exactly fit with what
          you may need to read, so by all means only take what works for you. 🙂
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
    textAlign: "center",
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
