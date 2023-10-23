import Title from "@/components/title";
import { ShapesIcon } from "lucide-react";
import CategoryList from "./components/category-list/category-list";

const CategoriesPage = () => {
  return (
    <div className="container px-2 md:px-5">
      <section className="mt-7 space-y-10">
        <Title>
          <ShapesIcon size={16} fill="currentColor" />
          Catálogo
        </Title>

        <CategoryList />
      </section>
    </div>
  );
};

export default CategoriesPage;
