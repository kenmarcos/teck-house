import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import OrderProductItem from "./order-product-item";
import PriceInfo from "@/components/price-info";
import { formatPrice } from "@/utils/format";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/utils/product";

interface OrderCardProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

const OrderCard = ({ order }: OrderCardProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      const productTotalPrice = computeProductTotalPrice(orderProduct.product);

      return acc + productTotalPrice.totalPrice * orderProduct.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscount = subtotal - total;

  return (
    <Card>
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger className="px-5">
            <div className="text-start">
              <p className="uppercase">Id do pedido</p>
              <p>{order.id}</p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="p-5">
            <div className="flex justify-between text-xs ">
              <div>
                <p className="font-bold uppercase">Status</p>
                <p className="font-semibold text-primary">Pago</p>
              </div>

              <div>
                <p className="font-bold uppercase">Data</p>
                <p className="text-muted-foreground">
                  {format(order.createdAt, "dd/MM/yy")}
                </p>
              </div>

              <div>
                <p className="font-bold uppercase">Pagamento</p>
                <p className="text-muted-foreground">Cartão</p>
              </div>
            </div>

            <Separator className="my-5" />

            <ul className="space-y-4">
              {order.orderProducts.map((orderProduct) => (
                <li key={orderProduct.id}>
                  <OrderProductItem orderProduct={orderProduct} />
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <PriceInfo text="Subtotal" data={formatPrice(subtotal)} />

              <PriceInfo text="Entrega" data="GRÁTIS" />

              {totalDiscount > 0 && (
                <PriceInfo
                  text="Descontos"
                  data={`- ${formatPrice(totalDiscount)}`}
                />
              )}

              <PriceInfo
                className="font-bold"
                text="Total"
                data={formatPrice(total)}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderCard;
