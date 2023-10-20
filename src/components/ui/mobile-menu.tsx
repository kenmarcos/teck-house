import { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  PercentIcon,
} from "lucide-react";

interface MobileMenuProps {
  children: ReactNode;
}

const MobileMenu = ({ children }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        <div className="space-y-4 py-4">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LogInIcon size={16} /> Fazer Login
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-2">
            <HomeIcon size={16} /> Início
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-2">
            <PercentIcon size={16} /> Ofertas
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-2">
            <ListOrderedIcon size={16} /> Catálogo
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
