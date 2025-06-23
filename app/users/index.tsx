import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Users } from "@/src/types/users";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users?limit=5"
      );

      setUsers(response.data.products);
    };
    getUsers();
  }, []);

  return (
    <View>
      <Text>Users</Text>
      {users.map(({ id, name }) => {
        return (
          <Link key={id} href={`users/${id}`}>
            {name}
          </Link>
        );
      })}
    </View>
  );
};

export default UsersScreen;
