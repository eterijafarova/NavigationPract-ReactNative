import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=5"
      );

      setProducts(response.data.products);
    };
    getProducts();
  }, []);

  return (
    <View>
      <Text>Our Products</Text>
      {products.map(({ id, title }) => {
        return (
          <Link key={id} href={`products/${id}`}>
            {title}
          </Link>
        );
      })}
    </View>
  );
};

export default ProductsScreen;
