import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function GetStarted() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
        }}
      >
        You Want smtj buy
      </Text>

      <Button
        title="View Products"
        onPress={() => {
          router.navigate("/components/ProductsPage");
        }}
      />
    </View>
  );
}
