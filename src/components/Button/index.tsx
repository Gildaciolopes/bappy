import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
