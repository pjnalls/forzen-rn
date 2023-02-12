/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    "forzen-rn://navigation/",
    "https://snack.expo.dev/@pjnalls/github.com-pjnalls-forzen-rn/navigation/",
  ],
  config: {
    screens: {
      Root: {
        screens: {
          Home: "*",
          Individuation: {
            screens: {
              IndividuationScreen: "one",
            },
          },
          Meditation: {
            screens: {
              MeditationScreen: "two",
            },
          },
        },
      },
    },
  },
};

export default linking;
