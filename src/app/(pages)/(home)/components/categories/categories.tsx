import { ComponentProps } from "react";
import CategoryItem from "../category-item/category-item";
import { Category } from "@prisma/client";

interface CategoriesProps extends ComponentProps<"section"> {
  categories: Category[];
}

const Categories = ({ categories, ...rest }: CategoriesProps) => {
  return (
    <section {...rest}>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryItem category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
