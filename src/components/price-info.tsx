import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface PriceInfoProps extends ComponentProps<"div"> {
  text: string;
  data: string;
}

const PriceInfo = ({ text, data, className, ...rest }: PriceInfoProps) => {
  return (
    <div
      {...rest}
      className={twMerge(
        "flex justify-between border-t-2 py-2 text-sm",
        className,
      )}
    >
      <p>{text}</p>

      <p>{data}</p>
    </div>
  );
};

export default PriceInfo;
