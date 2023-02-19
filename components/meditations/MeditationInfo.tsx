import { FC } from "react";
import { styles } from "../../shared/styles/InfoModal.styles";
import { Text, View } from "../Themed";

export const MeditationInfo: FC = () => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
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
        professional medical or mental health services and is based on personal
        research, education, and observations for inspirational and
        entertainment purposes only.
      </Text>
    </View>
  </View>
);
