import ProductCard from "@/components/product-card";

const ShowcaseProducts = () => {
  return (
    <ul className="flex w-full flex-nowrap justify-between gap-4 overflow-x-auto pb-6">
      <li>
        <ProductCard />
      </li>
    </ul>
  );
};

export default ShowcaseProducts;
