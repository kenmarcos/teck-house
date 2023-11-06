"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";
import { ComponentProps, Dispatch, SetStateAction, useState } from "react";

interface CounterProps extends ComponentProps<"div"> {
  count: number;
  buttonSize?: "sm" | "md";
  decreaseCount: () => void;
  increaseCount: () => void;
}

const Counter = ({
  count,
  buttonSize = "md",
  className,
  increaseCount,
  decreaseCount,
  ...rest
}: CounterProps) => {
  const containerClasses = twMerge("flex items-center gap-x-4", className);

  const handleIncreaseCount = () => {
    increaseCount();
  };

  const handleDecreaseCount = () => {
    if (count === 1) return;

    decreaseCount();
  };

  const buttonTailwindSize = buttonSize === "md" ? "h-10 w-10" : "h-7 w-7";

  return (
    <div {...rest} className={containerClasses}>
      <Button
        size="icon"
        variant="outline"
        onClick={handleDecreaseCount}
        disabled={count === 1}
        className={buttonTailwindSize}
      >
        <ChevronLeftIcon />
      </Button>

      <span>{count}</span>

      <Button
        size="icon"
        variant="outline"
        onClick={handleIncreaseCount}
        className={buttonTailwindSize}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default Counter;
