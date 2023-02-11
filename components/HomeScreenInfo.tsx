import { styles } from "../shared/styles/Modal.styles";
import { Text, View } from "./Themed";

export default function HomeScreenInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          This is simply another way to the best version of yourself.
          {"\n\n"}
          ...a way via non-dualistic processes of wholeness for the development
          of the individual self and the deepening of ecological awareness.
        </Text>
      </View>
    </View>
  );
}
