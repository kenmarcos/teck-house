import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";

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
    <>
      <ProductImages imageUrls={product?.imageUrls} name={product?.name} />
    </>
  );
};

export default ProductPage;
