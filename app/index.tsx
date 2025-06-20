// import { Link, useRouter } from "expo-router";
// import { Button, Text, View } from "react-native";

// export default function Index() {
//   const router = useRouter();
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//       <Link href={"/details"}>Open Details</Link>
//       <Link href={"/address"}>Open Address</Link>
//       <Button
//         title="open "
//         onPress={() => {
//           router.navigate("/details");
//         }}
//       />
//     </View>
//   );
// }

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
          fontSize: 30,
        }}
      >
        You Want Authentic here you go
      </Text>

      <Button
        title="open "
        onPress={() => {
          router.navigate("/components/HomePage");
        }}
      />
    </View>
  );
}
