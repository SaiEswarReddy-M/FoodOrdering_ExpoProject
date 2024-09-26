import { FlatList, View } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

const product = products[0];

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }} //gap btw rows
      columnWrapperStyle={{ gap: 10 }} //gap btwn counmns
    />
  );
}
