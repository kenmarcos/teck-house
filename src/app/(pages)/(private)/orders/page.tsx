import Title from "@/components/title";
import { ShoppingBagIcon } from "lucide-react";
import OrderList from "./components/order-list";

const OrdersPage = async () => {
  return (
    <div className="container px-2 md:px-5">
      <section className="mt-7 space-y-10">
        <Title>
          <ShoppingBagIcon size={16} />
          Meus Pedidos
        </Title>

        <OrderList />
      </section>
    </div>
  );
};

export default OrdersPage;
