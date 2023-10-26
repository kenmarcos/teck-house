import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { Showcase } from "@/components/showcase/showcase";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div className="container space-y-20 px-0">
      <section className="grid grid-cols-1 gap-y-8 md:mt-7 md:grid-cols-2 md:gap-x-10 md:px-5 lg:grid-cols-5 lg:px-10">
        <ProductImages
          imageUrls={product?.imageUrls}
          name={product?.name}
          className="lg:col-span-3"
        />

        <ProductInfo className="px-2 md:rounded-lg md:bg-muted lg:col-span-2" />
      </section>

      <Showcase.Root className="space-y-5 md:order-5 md:col-span-2 md:px-5 lg:px-10">
        <Showcase.Title className="px-2">Produtos recomendados</Showcase.Title>
        <Showcase.Products
          productList={product.category.products}
          className="flex w-full flex-nowrap gap-4 overflow-x-auto pb-6"
        />
      </Showcase.Root>
    </div>
  );
};

export default ProductPage;
