import { formatPrice } from "@/utils/format";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-[150px] space-y-4 md:w-[190px]">
      <div className="flex aspect-square items-center justify-center rounded-lg bg-accent">
        <Image
          src="/01_logi-mx-mechanical.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-2/3 "
          alt="Foto do produto"
        />
      </div>

      <div className="space-y-2">
        <p className="truncate text-sm">G Pro X Superlight</p>

        <div>
          <p className="font-bold text-primary">{formatPrice(360.0)}</p>

          <p className="text-xs text-muted-foreground line-through">
            {formatPrice(680.35)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
