import { ProductWithTotalPrice } from "@/utils/product";
import { create } from "zustand";

export interface CartItem extends ProductWithTotalPrice {
  quantity: number;
}

interface CartStore {
  products: CartItem[];
  addProductToCart: (product: CartItem) => void;
  removeProductFromCart: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  products: [],
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

        localStorage.setItem(
          "@teck-house:cart",
          JSON.stringify(state.products),
        );

        return {
          ...state,
          products: [...state.products],
        };
      }

      localStorage.setItem(
        "@teck-house:cart",
        JSON.stringify([...state.products, product]),
      );

      return {
        ...state,
        products: [...state.products, product],
      };
    }),

  removeProductFromCart: (productId: string) => {
    set((state) => {
      const updatedProducts = state.products.filter(
        (product) => product.id !== productId,
      );

      localStorage.setItem("@teck-house:cart", JSON.stringify(updatedProducts));

      return {
        ...state,
        products: updatedProducts,
      };
    });
  },

  increaseProductQuantity: (productId: string) =>
    set((state) => {
      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });

      localStorage.setItem("@teck-house:cart", JSON.stringify(updatedProducts));

      return {
        ...state,
        products: updatedProducts,
      };
    }),

  decreaseProductQuantity: (productId: string) =>
    set((state) => {
      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        return product;
      });

      localStorage.setItem("@teck-house:cart", JSON.stringify(updatedProducts));

      return {
        ...state,
        products: updatedProducts,
      };
    }),
}));
