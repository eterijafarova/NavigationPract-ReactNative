import { Product } from "@/src/types";
import { Users } from "@/src/types/users";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const UserDetails = () => {
  const [users, setUsers] = useState<Users>({} as Users);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUsers(response.data);
    };

    getUsers();
  }, []);

  return (
    <View>
      <Text>{users.name}</Text>
      <Text>ID: {id}</Text>
      <Text>USERNAME: {users.username}</Text>
      <Text>EMAIL: {users.email}</Text>
      <Text>PHONE: {users.phone}</Text>
    </View>
  );
};

export default UserDetails;
