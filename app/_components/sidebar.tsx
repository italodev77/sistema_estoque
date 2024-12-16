"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* imagem */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">EstoquErp</h1>
      </div>
      {/* botões */}
      <div className="flex flex-col gap-2 p-2">
        <Link href="/" passHref>
          <Button
            variant="ghost"
            className="mx-auto w-[100%] justify-start gap-2"
          >
            <LayoutGridIcon size={20} />
            Dashboard
          </Button>
        </Link>

        <Link href="/products" passHref>
          <Button
            variant="ghost"
            className="mx-auto w-[100%] justify-start gap-2"
          >
            <PackageIcon size={20} />
            Produtos
          </Button>
        </Link>

        <Link href="/sales" passHref>
          <Button
            variant="ghost"
            className="mx-auto w-[100%] justify-start gap-2"
          >
            <ShoppingBasketIcon size={20} />
            Vendas
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
