import ProductCard from "@/components/product-card";
import { Product } from "@prisma/client";

interface ShowcaseProductsProps {
  productList: Product[];
}

const ShowcaseProducts = ({ productList }: ShowcaseProductsProps) => {
  return (
    <ul className="flex w-full flex-nowrap justify-between gap-4 overflow-x-auto pb-6">
      {productList.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ShowcaseProducts;
