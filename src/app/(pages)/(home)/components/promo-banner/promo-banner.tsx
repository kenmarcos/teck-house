import Image from "next/image";
import { ComponentProps } from "react";

interface PromoBannerProps extends ComponentProps<"section"> {
  src: string;
  alt: string;
}

const PromoBanner = ({ src, alt, ...rest }: PromoBannerProps) => {
  return (
    <section {...rest}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="h-[150px] w-full rounded-lg object-cover"
      />
    </section>
  );
};

export default PromoBanner;
