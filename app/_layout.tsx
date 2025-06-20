import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
        },
        headerTitle: "My Style",
        headerTintColor: "black",
        headerTitleAlign: "center",
        headerBlurEffect: "light",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="components/ProductsPage"
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTitle: "",
          headerRight: () => (
            <View>
              <Link href={"/components/ProductInfoPage"}>Cart</Link>
            </View>
          ),
        }}
      ></Stack.Screen>

      <Stack.Screen name="/components/PaymentPage" options={{}}></Stack.Screen>
    </Stack>
  );
}
