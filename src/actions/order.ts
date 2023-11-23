"use server";

import { prismaClient } from "@/lib/prisma";
import { CartItem } from "@/store/cart";

export const createOrder = async (cartItems: CartItem[], userId: string) => {
  const order = await prismaClient.order.create({
    data: {
      userId,
      status: "AWAITING",
      orderProducts: {
        createMany: {
          data: cartItems.map((cartItem) => ({
            orderBasePrice: cartItem.basePrice,
            orderDiscountPercentage: cartItem.discountPercentage,
            productId: cartItem.id,
            quantity: cartItem.quantity,
          })),
        },
      },
    },
  });

  return order;
};
