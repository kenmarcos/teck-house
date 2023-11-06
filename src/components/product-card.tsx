import { formatPrice } from "@/utils/format";
import Image from "next/image";
import DiscountBadge from "./discount-badge";
import { ProductWithTotalPrice } from "@/utils/product";

interface ProductCardProps {
  product: ProductWithTotalPrice;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, imageUrls, basePrice, totalPrice, discountPercentage } =
    product;

  return (
    <div className="w-[150px] space-y-2 md:w-[190px]">
      <div className="relative flex aspect-square items-center justify-center rounded-lg bg-accent">
        <Image
          src={imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="aspect-square w-2/3 object-contain"
          alt={`Foto do produto ${name}`}
        />

        {discountPercentage > 0 && (
          <DiscountBadge className="absolute left-2 top-2">
            {discountPercentage}
          </DiscountBadge>
        )}
      </div>

      <div className="space-y-2">
        <p className="truncate text-sm" title={name}>
          {name}
        </p>

        <div>
          <p className="font-bold text-primary">
            {discountPercentage > 0
              ? formatPrice(totalPrice)
              : formatPrice(Number(basePrice))}
          </p>

          {discountPercentage > 0 && (
            <p className="text-xs text-muted-foreground line-through">
              {formatPrice(Number(basePrice))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
