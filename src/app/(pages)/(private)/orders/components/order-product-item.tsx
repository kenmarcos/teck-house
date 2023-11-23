import { formatPrice } from "@/utils/format";
import { computeProductTotalPrice } from "@/utils/product";
import { OrderProduct, Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const { product, quantity, orderBasePrice, orderDiscountPercentage } =
    orderProduct;

  const productWithTotalPrice = computeProductTotalPrice(product);

  return (
    <div className="flex items-center gap-2">
      <div className="flex aspect-square w-[77px] items-center justify-center rounded-lg bg-secondary">
        <Image
          src={product.imageUrls[0]}
          alt={`Imagem do produto ${product.name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="aspect-square w-2/3 object-contain"
        />
      </div>

      <div className="flex w-full max-w-sm flex-col justify-between">
        <p className="truncate text-xs" title={product.name}>
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          <p className="text-sm font-bold">
            {formatPrice(Number(productWithTotalPrice.totalPrice))}
          </p>

          {orderDiscountPercentage > 0 && (
            <p className="text-xs text-muted-foreground line-through">
              {formatPrice(Number(orderBasePrice))}
            </p>
          )}
        </div>

        <p className="mt-2 text-xs text-muted-foreground">Qtd: {quantity}</p>
      </div>
    </div>
  );
};

export default OrderProductItem;
