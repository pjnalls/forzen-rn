import { FC } from "react";
import { styles } from "../shared/styles/Description.styles";
import { Text, View } from "./Themed";

export const HomeDescription: FC = () => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        This is simply another way to the best version of yourself.
        {"\n\n"}
        ...a way via non-dualistic processes of wholeness for the development of
        the individual self and the deepening of ecological awareness.
      </Text>
    </View>
  </View>
);
