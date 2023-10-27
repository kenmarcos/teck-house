import Image from "next/image";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";
import Counter from "./counter";

const CartItemCard = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 flex-wrap gap-2 sm:gap-4">
        <div className="aspect-square w-[77px] rounded-lg bg-secondary">
          {/* <Image /> */}
          Imagem
        </div>

        <div className="flex flex-col justify-between">
          <p className="truncate text-xs" title="Logitech MX Master 3s">
            Logitech MX Master 3s
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-bold">R$ 467,93</p>
            <p className="text-xs text-muted-foreground line-through">
              R$ 719,90
            </p>
          </div>

          <Counter />
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
