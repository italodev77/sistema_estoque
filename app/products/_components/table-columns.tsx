"use client";

import { Product } from "@/types/Product";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { CircleIcon } from "lucide-react";

// Converte o status numérico (0 ou 1) em um rótulo dinâmico, baseado também no estoque
const getStatusLabel = (status: number, stock: number) => {
  if (stock > 0) {
    return "Em estoque";
  }
  return status === 1 ? "Em estoque" : "Fora de estoque";
};

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "description",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const label = getStatusLabel(product.status, product.stock); // Adiciona validação do estoque

      return (
        <Badge
          variant={label === "Em estoque" ? "default" : "outline"}
          className="gap-2"
        >
          <CircleIcon
            size={14}
            className={`${
              label === "Em estoque"
                ? "fill-primary-foreground"
                : "fill-destructive-foreground"
            }`}
          />
          {label}
        </Badge>
      );
    },
  },
];
