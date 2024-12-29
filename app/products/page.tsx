// app/products/page.tsx

import { DataTable } from "@/components/ui/data-table";
import { api } from "@/services/api";
import { Product } from "@/types/Product";
import { productTableColumns } from "./_components/table-columns";
import AddProductButton from "./_components/add-product-button";

export const dynamic = "force-dynamic";

export default async function ProductPage() {
  let products: Product[] = [];

  try {
    const response = await api.get<Product[]>("/products");
    console.log(response.data); // Verifique os dados aqui
    products = response.data;
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
  }

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      {/* ESQUERDA */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-2xs font-semibold text-slate-500">
            Gestão de produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <AddProductButton />
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
}
