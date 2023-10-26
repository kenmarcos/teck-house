"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ProductImagesProps = Pick<Product, "imageUrls" | "name">;

enum Images {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(imageUrls[Images.FIRST]);

  const buttonClasses = (image: string) =>
    twMerge(
      "aspect-square h-16 px-2",
      selectedImage === image ? "border border-primary" : "border-transparent",
    );

  return (
    <section>
      <div className="space-y-7">
        <div className="flex h-96 items-center justify-center bg-muted">
          <Image
            src={selectedImage}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="aspect-square w-2/3 max-w-xs object-contain"
          />
        </div>

        <div className="flex justify-center gap-4 px-5 sm:justify-start">
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
