import { HTMLAttributes, ReactNode } from "react";
import { Badge } from "./ui/badge";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

const Title = ({ children, ...rest }: TitleProps) => {
  return (
    <h2 {...rest}>
      <Badge
        variant="outline"
        className="gap-2 border-primary px-3 py-2 font-bold uppercase"
      >
        {children}
      </Badge>
    </h2>
  );
};

export default Title;
