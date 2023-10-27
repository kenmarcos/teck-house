import { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Title from "./title";
import { ShoppingCartIcon } from "lucide-react";
import CartItemCard from "./cart-item-card";

interface CartProps {
  children: ReactNode;
}

const Cart = ({ children }: CartProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <Title className="text-left">
            <ShoppingCartIcon size={16} fill="currentColor" />
            Carrinho
          </Title>
        </SheetHeader>

        <div>
          <ul className="space-y-5">
            <li>
              <CartItemCard />
            </li>

            <li>
              <CartItemCard />
            </li>

            <li>
              <CartItemCard />
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
