import axios from "axios";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";

const PostPage = () => {
  const { postId, id } = useLocalSearchParams();
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

      setPost(postRes.data);
      setComments(commentsRes.data);
    };

    fetchData();
  }, [postId]);

  if (!post) return null;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{post.title}</Text>
      <Text>{post.body}</Text>

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Comments:</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/users/${id}/posts/${postId}/comments/${item.id}`}>
            <Text style={{ marginVertical: 4 }}>{item.name}</Text>
          </Link>
        )}
      />
    </View>
  );
};

export default PostPage;
