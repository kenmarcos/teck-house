import { prismaClient } from "@/lib/prisma";
import CategoryCard from "../category-card/category-card";
import Link from "next/link";

const CategoryList = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <ul className="grid grid-cols-[repeat(2,_minmax(0,_200px))] justify-center gap-7 sm:grid-cols-[repeat(3,_minmax(0,_250px))] md:gap-10">
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/categories/${category.slug}`}>
            <CategoryCard category={category} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
