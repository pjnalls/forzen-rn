import { FC } from "react";
import { styles } from "../../shared/styles/Description.styles";
import { Text, View } from "../Themed";

export const IndividuationDescription: FC = () => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        Select an image below for bite-sized individuation.
        {"\n\n"}
        Many of these individuations may overlap with meditations which you can
        view as well. Some individuations may not exactly fit with what you may
        need to read, so by all means only take what works for you. 🙂
      </Text>
    </View>
  </View>
);
