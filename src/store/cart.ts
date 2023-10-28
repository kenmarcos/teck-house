import { ProductWithTotalPrice } from "@/utils/product";
import { create } from "zustand";

export interface CartItem extends ProductWithTotalPrice {
  quantity: number;
}

interface CartStore {
  products: CartItem[];
  subtotal: number;
  total: number;
  totalDiscount: number;
  addProductToCart: (product: CartItem) => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  products: [],
  subtotal: 0,
  total: 0,
  totalDiscount: 0,
  addProductToCart: (product: CartItem) =>
    set((state) => {
      const productIsAlreadyOnCart = state.products.some(
        (cartProduct) => cartProduct.id === product.id,
      );

      if (productIsAlreadyOnCart) {
        const productIndex = state.products.findIndex(
          (cartProduct) => cartProduct.id === product.id,
        );

        state.products[productIndex].quantity += product.quantity;

        return {
          ...state,
          products: [...state.products],
        };
      }

      return {
        ...state,
        products: [...state.products, product],
      };
    }),

  increaseProductQuantity: (productId: string) =>
    set((state) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === productId,
      );

      state.products[productIndex].quantity += 1;

      return {
        ...state,
      };
    }),

  decreaseProductQuantity: (productId: string) =>
    set((state) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === productId,
      );

      state.products[productIndex].quantity -= 1;

      return {
        ...state,
      };
    }),
}));
