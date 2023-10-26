import ProductCard from "@/components/product-card";
import { Product } from "@prisma/client";
import Link from "next/link";
import { ComponentProps } from "react";

interface ShowcaseProductsProps extends ComponentProps<"ul"> {
  productList: Product[];
}

const ShowcaseProducts = ({ productList, ...rest }: ShowcaseProductsProps) => {
  return (
    <ul {...rest}>
      {productList.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.slug}`}>
            <ProductCard product={product} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShowcaseProducts;
