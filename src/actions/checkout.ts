"use server";

import { CartItem } from "@/store/cart";
import Stripe from "stripe";

export const createCheckout = async (cartProducts: CartItem[]) => {
  // Create instance of Stripe
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  //   Create checkout session
  const checkout = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `${process.env.HOST_URL}/orders/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: process.env.HOST_URL,
    line_items: cartProducts.map((cartProduct) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: cartProduct.name,
            description: cartProduct.description,
            images: cartProduct.imageUrls,
          },
          unit_amount: cartProduct.totalPrice * 100,
        },
        quantity: cartProduct.quantity,
      };
    }),
  });

  // Return checkout
  return {
    id: checkout.id,
  };
};
