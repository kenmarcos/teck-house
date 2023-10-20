import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between p-7">
        <Button size="icon" variant="outline">
          <MenuIcon size={16} />
        </Button>

        <Link href="/">
          <h1 className="text-lg font-bold text-primary dark:text-foreground">
            <span className="bg-logo-gradient bg-clip-text text-transparent">
              TecK
            </span>{" "}
            House
          </h1>
        </Link>

        <Button size="icon" variant="outline">
          <ShoppingCartIcon size={16} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
