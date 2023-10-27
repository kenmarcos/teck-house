import Counter from "@/components/counter";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/utils/format";
import { Product } from "@prisma/client";
import { ComponentProps } from "react";

interface ProductInfoProps extends ComponentProps<"section"> {
  product: Product;
}

const ProductInfo = ({ product, ...rest }: ProductInfoProps) => {
  const { name, basePrice, description } = product;

  return (
    <section {...rest}>
      <div className="space-y-6 md:px-7 md:py-12 ">
        <h2 className="text-xl">{name}</h2>

        <div>
          <p className="text-muted-foreground">
            De:{" "}
            <span className="line-through">
              {formatPrice(Number(basePrice))}
            </span>
          </p>

          <p className="text-2xl font-bold">Por: R$ 467,93</p>
        </div>

        <Counter />

        <div className="space-y-2">
          <h3 className="font-bold">Descrição</h3>

          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <Button className="w-full font-bold uppercase">
          Adicionar ao carrinho
        </Button>
      </div>
    </section>
  );
};

export default ProductInfo;
