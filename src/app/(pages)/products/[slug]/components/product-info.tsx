import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { ComponentProps } from "react";

const ProductInfo = ({ ...rest }: ComponentProps<"section">) => {
  return (
    <section {...rest}>
      <div className="space-y-6 md:px-7 md:py-12 ">
        <h2 className="text-xl">Logitech MX Master 3s</h2>

        <div>
          <p className="text-muted-foreground">
            De: <span className="line-through">R$ 719,90</span>
          </p>

          <p className="text-2xl font-bold">Por: R$ 467,93</p>
        </div>

        <div className="flex items-center gap-x-4">
          <Button size="icon" variant="outline">
            <ArrowLeftIcon />
          </Button>

          <span>10</span>

          <Button size="icon" variant="outline">
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Descrição</h3>

          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla
            enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur. Lacinia
            venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum
            dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla
            vel pulvinar metus. Lorem ipsum dolor sit amet consectetur. Lorem
            Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla
            enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur. Lacinia
            venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum
            dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla
            vel pulvinar m
          </p>
        </div>

        <Button className="w-full">Adicionar ao carrinho</Button>
      </div>
    </section>
  );
};

export default ProductInfo;
