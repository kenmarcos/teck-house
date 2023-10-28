"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";
import Counter from "./counter";
import { CartItem, useCartStore } from "@/store/cart";
import { formatPrice } from "@/utils/format";
import { useState } from "react";

interface CartItemCardProps {
  product: CartItem;
}

const CartItemCard = ({ product }: CartItemCardProps) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const increaseProductQuantity = useCartStore(
    (state) => state.increaseProductQuantity,
  );

  const decreaseProductQuantity = useCartStore(
    (state) => state.decreaseProductQuantity,
  );

  const { name, imageUrls, basePrice, totalPrice } = product;

  const increaseQuantity = () => {
    setQuantity((currentState) => currentState + 1);

    increaseProductQuantity(product.id);
  };

  const decreaseQuantity = () => {
    setQuantity((currentState) => currentState - 1);

    decreaseProductQuantity(product.id);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 flex-wrap gap-2 sm:gap-4">
        <div className="flex aspect-square w-[77px] items-center justify-center rounded-lg bg-secondary">
          <Image
            src={imageUrls[0]}
            alt={`Imagem do produto ${name}`}
            width={0}
            height={0}
            sizes="100vw"
            className="aspect-square w-2/3 object-contain"
          />
        </div>

        <div className="flex flex-col justify-between">
          <p className="truncate text-xs" title="Logitech MX Master 3s">
            {name}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-bold">
              {formatPrice(Number(totalPrice))}
            </p>
            <p className="text-xs text-muted-foreground line-through">
              {formatPrice(Number(basePrice))}
            </p>
          </div>

          <Counter
            count={quantity}
            decreaseCount={decreaseQuantity}
            increaseCount={increaseQuantity}
            buttonSize="sm"
          />
        </div>
      </div>

      <div>
        <Button size="icon" variant="outline" className="">
          <Trash2Icon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CartItemCard;
