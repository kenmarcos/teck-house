import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CartInfoProps extends ComponentProps<"div"> {
  text: string;
  data: string;
}

const CartInfo = ({ text, data, className, ...rest }: CartInfoProps) => {
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

export default CartInfo;
