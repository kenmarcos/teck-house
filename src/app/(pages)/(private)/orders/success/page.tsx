"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const SuccessPage = () => {
  useEffect(() => {
    localStorage.removeItem("@teck-house:cart");

    useCartStore.setState({ products: [] });
  }, []);

  return (
    <div className="container flex h-full items-center justify-center px-2 md:px-5">
      <div className="text-center">
        <div className="flex items-center justify-center gap-4">
          <div>
            <CheckCircleIcon size={56} color="#16A34A" />
          </div>
          <h2 className="text-2xl font-bold text-green-600">Muito obrigado!</h2>
        </div>

        <p className="mt-4">A sua compra foi finalizada com sucesso.</p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row ">
          <Button asChild>
            <Link href="/">Continuar comprando</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/orders">Ver resumo do pedido</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
