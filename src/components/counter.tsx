"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";
import { ComponentProps, useState } from "react";

const Counter = ({ className, ...rest }: ComponentProps<"div">) => {
  const [count, setCount] = useState(1);

  const containerClasses = twMerge("flex items-center gap-x-4", className);

  const increaseCount = () => {
    setCount((currentState) => currentState + 1);
  };

  const decreaseCount = () => {
    if (count === 0) return;

    setCount((currentState) => currentState - 1);
  };

  return (
    <div {...rest} className={containerClasses}>
      <Button
        size="icon"
        variant="outline"
        onClick={decreaseCount}
        disabled={count === 0}
      >
        <ChevronLeftIcon />
      </Button>

      <span>{count}</span>

      <Button size="icon" variant="outline" onClick={increaseCount}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default Counter;
