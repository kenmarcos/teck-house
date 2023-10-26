import ProductCard from "@/components/product-card";
import { Showcase } from "@/components/showcase/showcase";
import Title from "@/components/title";
import { prismaClient } from "@/lib/prisma";
import { CATEGORY_ICON } from "@/utils/category-icon";
import { ShapesIcon } from "lucide-react";

interface CategoryProductsPageProps {
  params: {
    slug: string;
  };
}

const CategoryProductsPage = async ({
  params: { slug },
}: CategoryProductsPageProps) => {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug,
      },
    },
  });

  return (
    <div className="container px-2 md:px-5">
      <section className="mt-7 space-y-10">
        <Title className="uppercase">
          {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
          {slug}
        </Title>

        <Showcase.Root>
          <Showcase.Products
            productList={products}
            className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          />
        </Showcase.Root>
      </section>
    </div>
  );
};

export default CategoryProductsPage;
