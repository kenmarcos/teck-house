import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

interface SuccessPageProps {
  searchParams: {
    session_id: string;
    order_id: string;
  };
}

const SuccessPage = ({ searchParams }: SuccessPageProps) => {
  return (
    <div className="container flex h-full items-center justify-center px-2 md:px-5">
      <div className="space-y-12 text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div>
              <CheckCircleIcon size={56} color="#16A34A" />
            </div>
            <h2 className="text-2xl font-bold text-green-600">
              Muito obrigado!
            </h2>
          </div>

          <p>A sua compra foi finalizada com sucesso.</p>

          <Alert>
            <AlertTitle>Código de identificação (ID) do pedido:</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              {searchParams.order_id}
            </AlertDescription>
          </Alert>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row ">
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
