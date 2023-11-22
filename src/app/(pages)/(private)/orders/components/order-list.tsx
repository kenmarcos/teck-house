import { authOptions } from "@/lib/nextauth";
import { prismaClient } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import OrderCard from "./order-card";

const OrderList = async () => {
  const session = await getServerSession(authOptions);

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {orders.map((order) => (
        <li key={order.id}>
          <OrderCard order={order} />
        </li>
      ))}
    </ul>
  );
};

export default OrderList;
