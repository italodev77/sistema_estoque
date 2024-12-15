import { api } from "@/services/api";
export default async function ProductPage() {
  const products = await api.get("/products");
  return <div>{products.map(products =>  <></}</div>;
}
