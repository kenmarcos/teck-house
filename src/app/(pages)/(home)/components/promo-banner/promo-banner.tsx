import Image from "next/image";

interface PromoBannerProps {
  banner: string;
  alt: string;
}

const PromoBanner = ({ banner, alt }: PromoBannerProps) => {
  return (
    <>
      <Image
        src={banner}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="h-[150px] w-full rounded-lg object-cover"
      />
    </>
  );
};

export default PromoBanner;
