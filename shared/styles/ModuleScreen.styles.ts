import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      paddingTop: StatusBar.currentHeight,
      paddingLeft: 16,
    },
    scrollView: {
      marginHorizontal: 20,
      backgroundColor: "transparent",
    },
    imageBackground: {
      flex: 1,
      justifyContent: "center",
    },
    image: {
      top: 16,
      width: Dimensions.get("window").width - 16,
      height: Dimensions.get("window").width - 16,
      alignSelf: "center",
      backgroundColor: "transparent",
    },
    title: {
      marginTop: 36,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    separator: {
      alignSelf: "center",
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
    imageSeparator: {
      padding: 4,
      width: "80%",
    },
  });