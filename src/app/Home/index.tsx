import { View, Image } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/bappyLogo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}></View>
    </View>
  );
}
