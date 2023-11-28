import { Showcase } from "@/components/showcase/showcase";
import Title from "@/components/title";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const OffersPage = async () => {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="container px-2 md:px-5">
      <section className="mt-7 space-y-10">
        <Title>
          <PercentIcon size={16} />
          Ofertas
        </Title>

        <Showcase.Root>
          <Showcase.Products
            productList={offers}
            className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          />
        </Showcase.Root>
      </section>
    </div>
  );
};

export default OffersPage;
