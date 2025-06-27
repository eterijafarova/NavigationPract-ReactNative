import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const CommentDetail = () => {
  const { commentId } = useLocalSearchParams();
  const [comment, setComment] = useState<any>(null);

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
      setComment(res.data);
    };

    fetchComment();
  }, [commentId]);

  if (!comment) return null;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: "bold" }}>{comment.name}</Text>
      <Text>{comment.email}</Text>
      <Text>{comment.body}</Text>
    </View>
  );
};

export default CommentDetail;
