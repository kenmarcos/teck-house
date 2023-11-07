import ProductCard from "@/components/product-card";
import {
  ProductWithTotalPrice,
  computeProductTotalPrice,
} from "@/utils/product";
import { Product } from "@prisma/client";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ShowcaseProductsProps extends ComponentProps<"ul"> {
  productList: Product[] | ProductWithTotalPrice[];
}

const ShowcaseProducts = ({
  productList,
  className,
}: ShowcaseProductsProps) => {
  return (
    <ul
      className={twMerge(
        "scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary",
        className,
      )}
    >
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
