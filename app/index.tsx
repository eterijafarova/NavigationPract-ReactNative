import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import ProductScreen from "./products";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Hello</Text>
      <ProductScreen />
    </View>
  );
}
