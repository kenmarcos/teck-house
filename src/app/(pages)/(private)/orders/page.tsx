import Title from "@/components/title";
import { ShoppingBasketIcon } from "lucide-react";

const OrdersPage = async () => {
  return (
    <div className="container px-2 md:px-5">
      <section className="mt-7 space-y-10">
        <Title>
          <ShoppingBasketIcon size={16} fill="currentColor" />
          Meus Pedidos
        </Title>
      </section>
    </div>
  );
};

export default OrdersPage;
