import { Button } from "@/components/ui/button";
import { SpeakerIcon } from "lucide-react";
import Link from "next/link";

const CategoryItem = () => {
  return (
    <Button asChild variant="outline" className="w-full gap-2">
      <Link href="/">
        <SpeakerIcon size={16} />
        <span>Fones</span>
      </Link>
    </Button>
  );
};

export default CategoryItem;
