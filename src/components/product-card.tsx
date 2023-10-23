import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-[190px] space-y-4">
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
        <p className="text-sm">G Pro X Superlight</p>

        <div className="flex items-center gap-4">
          <p className="font-bold text-primary">R$ 306,00</p>

          <p className="text-xs text-muted-foreground line-through">
            R$ 680,00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
