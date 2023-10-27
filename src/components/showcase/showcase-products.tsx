import ProductCard from "@/components/product-card";
import {
  ProductWithTotalPrice,
  computeProductTotalPrice,
} from "@/utils/product";
import { Product } from "@prisma/client";
import Link from "next/link";
import { ComponentProps } from "react";

interface ShowcaseProductsProps extends ComponentProps<"ul"> {
  productList: Product[] | ProductWithTotalPrice[];
}

const ShowcaseProducts = ({ productList, ...rest }: ShowcaseProductsProps) => {
  return (
    <ul {...rest}>
      {productList.map((product) => (
        <li key={product.id} className="first:ml-2 md:first:ml-0">
          <Link href={`/products/${product.slug}`}>
            <ProductCard product={computeProductTotalPrice(product)} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShowcaseProducts;
