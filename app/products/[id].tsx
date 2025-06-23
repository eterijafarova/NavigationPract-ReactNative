import { Product } from "@/src/types";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>({} as Product);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`https://dummyjson.com/product/${id}`);
      setProduct(response.data);
    };

    getProducts();
  }, []);

  return (
    <View>
      <Text>{product.title}</Text>
      <Text>ID: {id}</Text>
      <Text>PRODUCT: {product.description}</Text>
      <Text>PRICE: {product.price}</Text>
    </View>
  );
};

export default ProductDetails;

//users-usersDetail/ posts-postsDetails/ comments
