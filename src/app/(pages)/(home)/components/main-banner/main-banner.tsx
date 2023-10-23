import { unstable_getImgProps as getImgProps } from "next/image";
import { ComponentProps } from "react";

interface MainBannerProps extends ComponentProps<"section"> {
  desktopBanner: string;
  mobileBanner: string;
  alt: string;
}

const MainBanner = ({
  desktopBanner,
  mobileBanner,
  alt,
  ...rest
}: MainBannerProps) => {
  const common = { alt: "Hero", width: 800, height: 400 };
  const {
    props: { srcSet: mobile },
  } = getImgProps({ ...common, src: mobileBanner });
  const {
    props: { srcSet: desktop },
  } = getImgProps({ ...common, src: desktopBanner });

  const desktopMedia = `(min-width: ${768}px)`;
  const mobileMedia = `(max-width: ${768 - 1}px)`;

  return (
    <section {...rest}>
      <picture>
        <source media={mobileMedia} srcSet={mobile} />
        <source media={desktopMedia} srcSet={desktop} />
        <img
          alt={alt}
          className="h-[150px] w-full rounded-lg object-cover sm:h-auto md:rounded-none"
        />
      </picture>
    </section>
  );
};

export default MainBanner;
