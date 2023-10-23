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
  ...props
}: MainBannerProps) => {
  const common = { alt: "Hero", width: 800, height: 400 };
  const {
    props: { srcSet: mobile },
  } = getImgProps({ ...common, src: mobileBanner });
  const {
    props: { srcSet: desktop, ...rest },
  } = getImgProps({ ...common, src: desktopBanner });

  const desktopMedia = `(min-width: ${768}px)`;
  const mobileMedia = `(max-width: ${768 - 1}px)`;

  return (
    <section {...props}>
      <picture>
        <source media={mobileMedia} srcSet={mobile} />
        <source media={desktopMedia} srcSet={desktop} />
        <img
          alt={alt}
          className="w-full rounded-lg object-cover md:rounded-none"
          {...rest}
        />
      </picture>
    </section>
  );
};

export default MainBanner;
