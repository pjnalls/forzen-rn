import { FC } from "react";
import { styles } from "../../shared/styles/InfoModal.styles";
import { Text, View } from "../Themed";

export const IndividuationInfo: FC = () => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        When referring to individuations at F⍛rzen, we're interested in the
        process of unifying all aspects of the individual self in a
        non-dualistic process.
        {"\n\n"}
        We're particularly interested in high levels of self-awareness in order
        to discover opportunities to integrate inner areas, from within our
        unconciousness, with the individual self for psychological completeness,
        wellbeing, and unity.
        {"\n\n"}
        Disclaimer: The following content is not a subsititution for
        professional medical or mental health services and is based on personal
        research, education, and observations for inspirational and
        entertainment purposes only.
      </Text>
    </View>
  </View>
);
