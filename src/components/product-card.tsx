import { formatPrice } from "@/utils/format";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, imageUrls, basePrice } = product;

  return (
    <div className="w-[150px] space-y-4 md:w-[190px]">
      <div className="flex aspect-square items-center justify-center rounded-lg bg-accent">
        <Image
          src={imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-2/3 "
          alt={`Foto do produto ${name}`}
        />
      </div>

      <div className="space-y-2">
        <p className="truncate text-sm" title={name}>
          {name}
        </p>

        <div>
          <p className="font-bold text-primary">
            {formatPrice(Number(basePrice))}
          </p>

          <p className="text-xs text-muted-foreground line-through">
            {formatPrice(680.35)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
