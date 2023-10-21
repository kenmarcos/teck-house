import CategoryItem from "../category-item/category-item";

const Categories = () => {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 lg:grid-cols-6">
      <li>
        <CategoryItem />
      </li>
    </ul>
  );
};

export default Categories;
