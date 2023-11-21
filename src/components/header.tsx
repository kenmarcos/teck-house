"use client";

import { LogOutIcon, MenuIcon, ShoppingBagIcon, User2Icon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import Cart from "./cart";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const { status, data } = useSession();

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

        <div className="flex items-center gap-2">
          {status === "unauthenticated" && (
            <Button
              className="hidden lg:inline-flex"
              size="icon"
              variant="outline"
              onClick={async () => await signIn()}
              title="Fazer Login"
            >
              <User2Icon size={16} />
            </Button>
          )}

          {status === "authenticated" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Avatar className="hidden h-8 w-8 lg:block">
                    {data?.user?.image && <AvatarImage src={data.user.image} />}
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44" align="end">
                <DropdownMenuItem asChild>
                  <Link href={"/orders"} className="flex cursor-pointer gap-2">
                    <ShoppingBagIcon size={16} />
                    Meus Pedidos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer gap-2"
                  onClick={() => signOut()}
                >
                  <LogOutIcon size={16} /> Fazer Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Cart />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
