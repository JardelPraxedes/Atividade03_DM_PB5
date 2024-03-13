import { View, Text } from "react-native";
import React from "react";

const DetailsScreen = ({ route }) => {
  const { itemId, otherParam, otherParam2 } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tela de Detalhes</Text>
      <Text>ID do item: {itemId}</Text>
      <Text>Defesa: {otherParam}</Text>
      <Text>Ataque: {otherParam2}</Text>
    </View>
  );
};

export default DetailsScreen;
