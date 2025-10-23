import { View, Image } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/bappyLogo.png")}
        style={styles.logo}
      />
    </View>
  );
}
