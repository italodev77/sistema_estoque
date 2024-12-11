import { Button } from "@/components/ui/button";
import {
  LayoutGridIcon,
  Link,
  PackageIcon,
  ShoppingBasketIcon,
} from "lucide-react";
const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* imagem */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">EstoquErp</h1>
      </div>
      {/*botoes */}
      <div className="flex flex-col gap-2 p-2">
        <Button variant="ghost" className="justify-start gap-2" asChild>
          <Link href="/">
            <LayoutGridIcon size={20} />
            Dashboard
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start gap-2" asChild>
          <Link href="/products">
            <PackageIcon size={20} />
            Produtos
          </Link>
        </Button>
        <Button variant="ghost" className="justify-start gap-2" asChild>
          <Link href="/sales">
            <ShoppingBasketIcon size={20} />
            vendas
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
