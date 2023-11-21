import { authOptions } from "@/lib/nextauth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface PrivateRouteLayoutProps {
  children: ReactNode;
}

const PrivateRouteLayout = async ({ children }: PrivateRouteLayoutProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return <>{children}</>;
};

export default PrivateRouteLayout;
