import Counter from "@/components/counter";
import DiscountBadge from "@/components/discount-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/utils/format";
import { ProductWithTotalPrice } from "@/utils/product";
import { ArrowDownIcon } from "lucide-react";
import { ComponentProps } from "react";

interface ProductInfoProps extends ComponentProps<"section"> {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product, ...rest }: ProductInfoProps) => {
  const { name, basePrice, totalPrice, description } = product;

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

          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">
              Por: {formatPrice(Number(totalPrice))}
            </p>

            <DiscountBadge className="text-xl" iconSize={24}>
              {product.discountPercentage}
            </DiscountBadge>
          </div>
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
