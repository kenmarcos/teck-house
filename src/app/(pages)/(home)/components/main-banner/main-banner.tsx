import Image from "next/image";

interface MainBannerProps {
  desktopBanner: string;
  mobileBanner: string;
}

const MainBanner = ({ desktopBanner, mobileBanner }: MainBannerProps) => {
  return (
    <>
      <Image
        src={desktopBanner}
        alt="Até 55% de desconto esse mês!"
        width={0}
        height={0}
        className="hidden h-auto w-full md:inline"
        sizes="100vw"
        priority
      />

      <Image
        src={mobileBanner}
        alt="Até 55% de desconto esse mês!"
        width={0}
        height={0}
        className="h-[150px] w-full rounded-lg object-cover md:hidden"
        sizes="100vw"
        priority
      />
    </>
  );
};

export default MainBanner;
