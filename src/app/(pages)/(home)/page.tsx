import Image from "next/image";
import { ShowcaseSection } from "./components/showcase";
import CategoriesSection from "./components/categories/categories-section";

export default function Home() {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <section className="mt-7">
        <Image
          src="/banner-home-01_desktop.png"
          alt="Até 55% de desconto esse mês!"
          width={0}
          height={0}
          className="hidden h-auto w-full md:inline"
          sizes="100vw"
          priority
        />

        <Image
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês!"
          width={0}
          height={0}
          className="h-auto w-full md:hidden"
          sizes="100vw"
          priority
        />
      </section>

      <CategoriesSection />

      <ShowcaseSection.Root>
        <ShowcaseSection.Title>Ofertas</ShowcaseSection.Title>

        <ShowcaseSection.Products />
      </ShowcaseSection.Root>
    </div>
  );
}
