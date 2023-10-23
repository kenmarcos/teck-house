import { ComponentProps, ReactNode } from "react";

interface ShowcaseRootProps extends ComponentProps<"section"> {
  children: ReactNode;
}

const ShowcaseRoot = ({ children, ...rest }: ShowcaseRootProps) => {
  return <section {...rest}>{children}</section>;
};

export default ShowcaseRoot;
