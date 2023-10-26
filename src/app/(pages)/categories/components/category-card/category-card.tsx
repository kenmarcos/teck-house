import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name, imageUrl } = category;

  return (
    <Card className="overflow-hidden">
      <div className="flex aspect-square items-center justify-center bg-accent bg-gradient-to-r from-primary to-[rgba(80,_51,_195,_0.20)_100%] sm:aspect-video">
        <Image
          src={imageUrl}
          alt={`Imagem da categoria ${name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="aspect-square w-2/3 object-contain md:w-1/2"
        />
      </div>

      <div className="p-4 text-center">
        <p className="font-bold">{name}</p>
      </div>
    </Card>
  );
};

export default CategoryCard;
