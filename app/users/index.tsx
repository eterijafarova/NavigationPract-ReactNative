import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { Users } from "@/src/types/users";

const UsersScreen = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };
    getUsers();
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/users/${item.id}`}>
            <Text style={{ marginVertical: 4 }}>{item.name}</Text>
          </Link>
        )}
      />
    </View>
  );
};

export default UsersScreen;
