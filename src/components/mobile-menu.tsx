import { ReactNode } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  PercentIcon,
} from "lucide-react";
import Link from "next/link";

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

          <SheetClose asChild>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <Link href="/">
                <HomeIcon size={16} /> Início
              </Link>
            </Button>
          </SheetClose>

          <Button variant="ghost" className="w-full justify-start gap-2">
            <PercentIcon size={16} /> Ofertas
          </Button>

          <SheetClose asChild>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <Link href="/categories">
                <ListOrderedIcon size={16} /> Catálogo
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
