"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import Image from "next/image";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ProductImagesProps
  extends ComponentProps<"section">,
    Pick<Product, "imageUrls" | "name"> {}

enum Images {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
}

const ProductImages = ({ imageUrls, name, ...rest }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(imageUrls[Images.FIRST]);

  const buttonClasses = (image: string) =>
    twMerge(
      "aspect-square h-16 px-2 md:bg-background",
      selectedImage === image ? "border border-primary" : "border-transparent",
    );

  return (
    <section {...rest}>
      <div className="space-y-7 md:sticky md:top-7 md:h-3/4">
        <div className="flex h-96 items-center justify-center bg-muted md:h-full md:max-h-[800px] md:rounded-lg">
          <Image
            src={selectedImage}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="aspect-square w-2/3 max-w-xs object-contain"
          />
        </div>

        <div className="md: flex justify-center gap-4 px-2 sm:justify-start md:absolute md:top-0 md:flex-col">
          {imageUrls.map((imageUrl, index) => (
            <Button
              key={index}
              variant="secondary"
              className={buttonClasses(imageUrl)}
              onClick={() => setSelectedImage(imageUrl)}
            >
              <Image
                src={imageUrl}
                alt={`${name} - Foto ${index + 1}`}
                height={0}
                width={0}
                sizes="100vw"
                className="h-full w-full object-contain"
              />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductImages;
