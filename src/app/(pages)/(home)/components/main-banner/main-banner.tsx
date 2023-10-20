import Image from "next/image";

const MainBanner = () => {
  return (
    <section className="mt-7 md:mt-0">
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
  );
};

export default MainBanner;
