import * as WebBrowser from "expo-web-browser";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";

export default function HomeScreenInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          This is simply another way to the best version of yourself. 
          {"\n\n"}
          ...a way via non-dualistic processes of wholeness for the development of
          the individual self and the deepening of one's ecological awareness.
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
    color: "#997d7d",
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    opacity: 1
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
