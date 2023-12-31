"use client";

import Counter from "@/components/counter";
import DiscountBadge from "@/components/discount-badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/utils/format";
import { ProductWithTotalPrice } from "@/utils/product";
import { ComponentProps, useState } from "react";

interface ProductInfoProps extends ComponentProps<"section"> {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product, ...rest }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { name, basePrice, totalPrice, discountPercentage, description } =
    product;

  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const { toast } = useToast();

  const handleAddProductToCart = () => {
    addProductToCart({ ...product, quantity });

    toast({
      description: "Produto adicionado ao carrinho!",
    });
  };

  const handleIncreaseQuantity = () => {
    setQuantity((currentState) => currentState + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((currentState) => currentState - 1);
  };

  return (
    <section {...rest}>
      <div className="space-y-6 md:px-7 md:py-12 ">
        <h2 className="text-xl">{name}</h2>

        <div>
          {discountPercentage > 0 && (
            <p className="text-muted-foreground">
              De:{" "}
              <span className="line-through">
                {formatPrice(Number(basePrice))}
              </span>
            </p>
          )}

          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">
              {discountPercentage > 0
                ? `Por: ${formatPrice(totalPrice)}`
                : formatPrice(totalPrice)}
            </p>

            {discountPercentage > 0 && (
              <DiscountBadge className="text-xl" iconSize={24}>
                {discountPercentage}
              </DiscountBadge>
            )}
          </div>
        </div>

        <Counter
          count={quantity}
          increaseCount={handleIncreaseQuantity}
          decreaseCount={handleDecreaseQuantity}
        />

        <div className="space-y-2">
          <h3 className="font-bold">Descrição</h3>

          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <Button
          className="w-full font-bold uppercase"
          onClick={handleAddProductToCart}
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </section>
  );
};

export default ProductInfo;
