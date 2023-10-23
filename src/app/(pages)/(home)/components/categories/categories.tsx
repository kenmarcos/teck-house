import { ComponentProps } from "react";
import CategoryItem from "../category-item/category-item";

const Categories = (props: ComponentProps<"section">) => {
  return (
    <section {...props}>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 lg:grid-cols-6">
        <li>
          <CategoryItem />
        </li>
      </ul>
    </section>
  );
};

export default Categories;
