import ProductCard from "@/components/product-card";
import { Product } from "@prisma/client";
import { ComponentProps } from "react";

interface ShowcaseProductsProps extends ComponentProps<"ul"> {
  productList: Product[];
}

const ShowcaseProducts = ({ productList, ...rest }: ShowcaseProductsProps) => {
  return (
    <ul {...rest}>
      {productList.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ShowcaseProducts;
