import * as WebBrowser from "expo-web-browser";
import { StyleSheet } from "react-native";

import { Text, View } from "../Themed";

export default function IndividuationScreenInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
          When referring to individuations at Forzen, we're interested in the
          process of unifying all aspects of the individual self in a
          non-dualistic process.
          {"\n\n"}
          We're particularly interested in high levels of self-awareness in
          order to discover opportunities to integrate inner areas, from within
          our unconciousness, with the individual self for psychological
          completeness, wellbeing, and unity.
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
