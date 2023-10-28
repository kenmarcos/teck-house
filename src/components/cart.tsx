"use client";

import { ReactNode } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import Title from "./title";
import { ShoppingCartIcon } from "lucide-react";
import CartItemCard from "./cart-item-card";
import { useCartStore } from "@/store/cart";

interface CartProps {
  children: ReactNode;
}

const Cart = ({ children }: CartProps) => {
  const cartProducts = useCartStore((state) => state.products);

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
            {cartProducts.map((product) => (
              <li key={product.id}>
                <CartItemCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
