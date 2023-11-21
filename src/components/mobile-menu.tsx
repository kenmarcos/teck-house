"use client";

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
  LogOutIcon,
  PercentIcon,
  ShoppingBagIcon,
} from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface MobileMenuProps {
  children: ReactNode;
}

const MobileMenu = ({ children }: MobileMenuProps) => {
  const { status, data } = useSession();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        {status === "authenticated" && (
          <div className="mt-4 flex items-center gap-2">
            <Avatar className="h-8 w-8">
              {data?.user?.image && <AvatarImage src={data.user.image} />}
            </Avatar>

            <div>
              <p className="truncate text-sm font-medium">{data?.user?.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {data?.user?.email}
              </p>
            </div>
          </div>
        )}

        <div className="mt-4 space-y-4">
          {status === "unauthenticated" && (
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={async () => await signIn()}
            >
              <LogInIcon size={16} /> Fazer Login
            </Button>
          )}

          {status === "authenticated" && (
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={async () => await signOut()}
            >
              <LogOutIcon size={16} /> Fazer Logout
            </Button>
          )}

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

          {status === "authenticated" && (
            <SheetClose asChild>
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <Link href="/orders">
                  <ShoppingBagIcon size={16} />
                  Meus Pedidos
                </Link>
              </Button>
            </SheetClose>
          )}

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
