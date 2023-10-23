import { Showcase } from "./components/showcase/showcase";
import Categories from "./components/categories/categories";
import MainBanner from "./components/main-banner/main-banner";
import PromoBanner from "./components/promo-banner/promo-banner";

export default function Home() {
  return (
    <div className="container mx-auto px-2 md:px-0">
      {/* MAIN BANNER */}
      <MainBanner
        className="mt-7 md:mt-0"
        alt="Até 55% de desconto só esse mês"
        mobileBanner="/banner-home-01.png"
        desktopBanner="/banner-home-01_desktop.png"
      />

      {/* CATEGORIES */}
      <Categories className="mt-7 md:px-5 lg:px-10" />

      <div className="mt-16 space-y-8 md:grid md:grid-cols-2 md:gap-x-7">
        {/* SHOWCASE */}
        <section className="space-y-5 md:order-1 md:col-span-2 md:px-5 lg:px-10">
          <Showcase.Title>Ofertas</Showcase.Title>
          <Showcase.Products />
        </section>

        {/* PROMO BANNER */}
        <section className="md:order-3 md:pl-5 lg:pl-10">
          <PromoBanner
            banner="/banner-home-02.png"
            alt="Até 20% de desconto em fones"
          />
        </section>

        {/* SHOWCASE */}
        <section className="space-y-5 md:order-5 md:col-span-2 md:px-5 lg:px-10">
          <Showcase.Title>Teclados</Showcase.Title>
          <Showcase.Products />
        </section>

        {/* PROMO BANNER */}
        <section className="md:order-4 md:pr-5 lg:pr-10">
          <PromoBanner
            banner="/banner-home-03.png"
            alt="Até 55% de desconto em mouses"
          />
        </section>

        {/* PROMO BANNER */}
        <section className="hidden md:order-6 md:col-span-2 md:block md:px-5 lg:px-10 ">
          <PromoBanner
            banner="/banner-home-04.png"
            alt="Frete grátis para todo Brasil"
          />
        </section>

        {/* SHOWCASE */}
        <section className="space-y-5 md:order-6 md:col-span-2 md:px-5 lg:px-10">
          <Showcase.Title>Mouses</Showcase.Title>
          <Showcase.Products />
        </section>
      </div>
    </div>
  );
}
