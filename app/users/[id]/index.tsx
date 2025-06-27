import axios from "axios";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";

const UserDetail = () => {
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const postsRes = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

      setUser(userRes.data);
      setPosts(postsRes.data);
    };

    fetchData();
  }, [id]);

  if (!user) return null;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
      <Text>{user.website}</Text>
      <Text>{user.address?.city}</Text>
      <Text>{user.company?.name}</Text>

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Posts:</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/users/${id}/posts/${item.id}`}>
            <Text style={{ marginVertical: 4 }}>{item.title}</Text>
          </Link>
        )}
      />
    </View>
  );
};

export default UserDetail;
