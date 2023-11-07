"use client";

import { useCartStore } from "@/store/cart";
import React, { useEffect } from "react";

const OrdersPage = () => {
  useEffect(() => {
    localStorage.removeItem("@teck-house:cart");

    useCartStore.setState({
      products: [],
    });
  }, []);

  return <div>OrdersPage</div>;
};

export default OrdersPage;
