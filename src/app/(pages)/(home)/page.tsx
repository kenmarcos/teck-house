import { prismaClient } from "@/lib/prisma";
import { Showcase } from "../../../components/showcase/showcase";
import Categories from "./components/categories/categories";
import MainBanner from "./components/main-banner/main-banner";
import PromoBanner from "./components/promo-banner/promo-banner";

export default async function Home() {
  const categories = await prismaClient.category.findMany({});

  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="container px-2 md:px-0">
      <MainBanner
        className="mt-7 md:mt-0"
        alt="Até 55% de desconto só esse mês"
        mobileBanner="/banner-home-01.png"
        desktopBanner="/banner-home-01_desktop.png"
      />

      <Categories className="mt-7 md:px-5 lg:px-10" categories={categories} />

      <div className="mt-16 space-y-8 md:grid md:grid-cols-2 md:gap-x-7">
        <Showcase.Root className="space-y-5 md:order-1 md:col-span-2 md:px-5 lg:px-10">
          <Showcase.Title>Ofertas</Showcase.Title>
          <Showcase.Products
            productList={offers}
            className="flex w-full flex-nowrap justify-between gap-4 overflow-x-auto pb-6"
          />
        </Showcase.Root>

        <PromoBanner
          className="md:order-3 md:pl-5 lg:pl-10"
          src="/banner-home-02.png"
          alt="Até 20% de desconto em fones"
        />

        <Showcase.Root className="space-y-5 md:order-5 md:col-span-2 md:px-5 lg:px-10">
          <Showcase.Title>Teclados</Showcase.Title>
          <Showcase.Products
            productList={keyboards}
            className="flex w-full flex-nowrap justify-between gap-4 overflow-x-auto pb-6"
          />
        </Showcase.Root>

        <PromoBanner
          className="md:order-4 md:pr-5 lg:pr-10"
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses"
        />

        <PromoBanner
          className="hidden md:order-6 md:col-span-2 md:block md:px-5 lg:px-10"
          src="/banner-home-04.png"
          alt="Frete grátis para todo Brasil"
        />

        <Showcase.Root className="space-y-5 md:order-6 md:col-span-2 md:px-5 lg:px-10">
          <Showcase.Title>Mouses</Showcase.Title>
          <Showcase.Products
            productList={mouses}
            className="flex w-full flex-nowrap justify-between gap-4 overflow-x-auto pb-6"
          />
        </Showcase.Root>
      </div>
    </div>
  );
}
