import CategoryItem from "../category-item/category-item";

const CategoriesSection = () => {
  return (
    <section className="mt-7 md:px-5 lg:px-10">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 lg:grid-cols-6">
        <li>
          <CategoryItem />
        </li>
      </ul>
    </section>
  );
};

export default CategoriesSection;
