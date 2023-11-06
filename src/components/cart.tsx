"use client";

import { ReactNode, useEffect, useMemo } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import Title from "./title";
import { AlertCircleIcon, ShoppingCartIcon } from "lucide-react";
import CartItemCard from "./cart-item-card";
import { useCartStore } from "@/store/cart";
import { Button } from "./ui/button";
import CartInfo from "./cart-info";
import { formatPrice } from "@/utils/format";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";

const Cart = () => {
  const cartProducts = useCartStore((state) => state.products);

  const subtotal = useMemo(() => {
    return cartProducts.reduce(
      (acc, product) => acc + Number(product.basePrice) * product.quantity,
      0,
    );
  }, [cartProducts]);

  const total = useMemo(() => {
    return cartProducts.reduce(
      (acc, product) => acc + product.totalPrice * product.quantity,
      0,
    );
  }, [cartProducts]);

  const totalDiscount = useMemo(() => {
    return subtotal - total;
  }, [subtotal, total]);

  useEffect(() => {
    const cart = localStorage.getItem("@teck-house:cart");

    if (cart) {
      useCartStore.setState({ products: JSON.parse(cart) });
    }
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="relative">
          <ShoppingCartIcon size={16} />
          {cartProducts.length > 0 && (
            <Badge className="absolute -top-3 left-1/2 justify-center">
              {cartProducts.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <Title className="text-left">
            <ShoppingCartIcon size={16} fill="currentColor" />
            Carrinho
          </Title>
        </SheetHeader>

        <div className="flex h-full flex-col space-y-6 py-7">
          {cartProducts.length === 0 && (
            <div className="flex h-full flex-col items-center gap-4 pt-8">
              <div className="relative">
                <ShoppingCartIcon size={76} />

                <AlertCircleIcon
                  size={28}
                  className="absolute -top-4 left-1/2 -translate-x-1/3"
                />
              </div>
              <p className="font-semibold">Carrinho vazio!</p>
            </div>
          )}

          {cartProducts.length > 0 && (
            <>
              <ScrollArea className="h-full">
                <ul className=" space-y-5">
                  {cartProducts.map((product) => (
                    <li key={product.id} className="pr-3">
                      <CartItemCard product={product} />
                    </li>
                  ))}
                </ul>
              </ScrollArea>

              <div>
                <CartInfo text="Subtotal" data={formatPrice(subtotal)} />

                <CartInfo text="Entrega" data="GRÁTIS" />

                {totalDiscount > 0 && (
                  <CartInfo
                    text="Descontos"
                    data={`- ${formatPrice(totalDiscount)}`}
                  />
                )}

                <CartInfo
                  className="font-bold"
                  text="Total"
                  data={formatPrice(total)}
                />
              </div>

              <Button className="w-full font-bold uppercase">
                Finalizar Compra
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
