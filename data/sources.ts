import { ImageSourcePropType } from "react-native";

export const sources = new Map<string, ImageSourcePropType>([
  /** Individuations */
  ["prism", require("../assets/images/individuations/prism.jpg")],
  ["rainbow", require("../assets/images/individuations/rainbow.jpg")],
  ["snowfall", require("../assets/images/individuations/snowfall.jpg")],
  ["sunrise", require("../assets/images/individuations/sunrise.jpg")],
  /** Meditations */
  ["canyon", require("../assets/images/meditations/canyon.jpg")],
  ["field", require("../assets/images/meditations/field.jpg")],
  ["open", require("../assets/images/meditations/open.jpg")],
  ["park", require("../assets/images/meditations/park.jpg")],
  ["space", require("../assets/images/meditations/space.jpg")],
]);
