import Image from "next/image";
import { ShowcaseSection } from "./components/showcase";
import CategoriesSection from "./components/categories/categories-section";
import MainBanner from "./components/main-banner/main-banner";

export default function Home() {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <MainBanner />

      <CategoriesSection />

      <ShowcaseSection.Root>
        <ShowcaseSection.Title>Ofertas</ShowcaseSection.Title>

        <ShowcaseSection.Products />
      </ShowcaseSection.Root>
    </div>
  );
}
