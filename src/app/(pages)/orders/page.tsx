"use client";

import React, { useEffect } from "react";

const OrdersPage = () => {
  useEffect(() => {
    localStorage.removeItem("@teck-house:cart");
  }, []);

  return <div>OrdersPage</div>;
};

export default OrdersPage;
