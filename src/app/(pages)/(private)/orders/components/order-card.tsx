"use client";

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
import { Button } from "@/components/ui/button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

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

enum OrderPaymentStatus {
  AWAITING = "Pendente",
  PAID = "Pago",
}

enum OrderPaymentStatusColor {
  AWAITING = "text-yellow-500",
  PAID = "text-green-600",
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

  const handleCheckout = async () => {
    const products = order.orderProducts.map((orderProduct) => {
      return {
        ...orderProduct.product,
        basePrice: orderProduct.orderBasePrice,
        discountPercentage: orderProduct.orderDiscountPercentage,
        totalPrice: computeProductTotalPrice(orderProduct.product).totalPrice,
        quantity: orderProduct.quantity,
      };
    });

    const checkout = await createCheckout(products, order.id);

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <Card>
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger className="px-5">
            <div className="text-start">
              <p className="uppercase">Id do pedido:</p>
              <p className="text-sm text-muted-foreground">{order.id}</p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="p-5">
            <div className="flex justify-between gap-5 text-xs">
              <div>
                <p className="font-bold uppercase">Status</p>
                <p
                  className={`font-semibold ${
                    OrderPaymentStatusColor[order.status]
                  }`}
                >
                  {OrderPaymentStatus[order.status]}
                </p>
              </div>

              <div>
                <p className="font-bold uppercase">Data</p>
                <p className="text-muted-foreground">
                  {format(new Date(order.createdAt), "dd/MM/yy")}
                </p>
              </div>

              {order.status === "PAID" && (
                <div>
                  <p className="font-bold uppercase">Pagamento</p>
                  <p className="text-muted-foreground">Cartão</p>
                </div>
              )}

              {order.status === "AWAITING" && (
                <Button
                  className="block w-full max-w-[280px]"
                  onClick={handleCheckout}
                >
                  Fazer pagamento
                </Button>
              )}
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
