import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";

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
  });

  if (!product) {
    return null;
  }

  return (
    <div className="container px-0">
      <div className="grid grid-cols-1 gap-y-8 md:mt-7 md:grid-cols-2 md:gap-x-10 md:px-5 lg:grid-cols-5 lg:px-10">
        <ProductImages
          imageUrls={product?.imageUrls}
          name={product?.name}
          className="lg:col-span-3"
        />

        <ProductInfo className="px-2 md:rounded-lg md:bg-muted lg:col-span-2" />
      </div>
    </div>
  );
};

export default ProductPage;
