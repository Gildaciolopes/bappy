import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = Array.from({ length: 10 }).map((_, index) => String(index));

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/bappyLogo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.filters}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Item
              data={{ status: FilterStatus.DONE, description: item }}
              onChangeStatus={() => console.log("mudar status")}
              onRemove={() => console.log("remover")}
            />
          )}
        />
      </View>
    </View>
  );
}
