import { MenuIcon, ShoppingCartIcon, User2Icon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between p-7">
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <MobileMenu>
              <Button size="icon" variant="outline">
                <MenuIcon size={16} />
              </Button>
            </MobileMenu>
          </div>

          <Link href="/">
            <h1 className="text-lg font-bold text-primary dark:text-foreground lg:text-2xl">
              <span className="bg-logo-gradient bg-clip-text text-transparent">
                TecK
              </span>{" "}
              House
            </h1>
          </Link>
        </div>

        <div className="hidden h-6 items-center gap-5 lg:flex">
          <Button asChild variant="link" className="dark:text-foreground">
            <Link href="/">Início</Link>
          </Button>

          <Separator orientation="vertical" />
          <Button variant="link" className="dark:text-foreground">
            Ofertas
          </Button>

          <Separator orientation="vertical" />
          <Button asChild variant="link" className="dark:text-foreground">
            <Link href="/categories">Catálogo</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button size="icon" variant="outline">
            <User2Icon size={16} />
          </Button>

          <Button size="icon" variant="outline">
            <ShoppingCartIcon size={16} />
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
