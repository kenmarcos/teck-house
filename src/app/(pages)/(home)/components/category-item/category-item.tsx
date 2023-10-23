import { Button } from "@/components/ui/button";
import { CATEGORY_ICON } from "@/utils/category-icon";
import { Category } from "@prisma/client";
import { SpeakerIcon } from "lucide-react";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { name, slug } = category;

  return (
    <Button asChild variant="outline" className="w-full gap-2">
      <Link href={`/categories/${slug}`}>
        {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
        <span>{name}</span>
      </Link>
    </Button>
  );
};

export default CategoryItem;
