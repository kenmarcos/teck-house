import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ShowCaseTitleProps extends ComponentProps<"h3"> {
  children: ReactNode;
}

const ShowcaseTitle = ({
  children,
  className,
  ...rest
}: ShowCaseTitleProps) => {
  const headingClasses = twMerge("text-lg font-bold uppercase", className);

  return (
    <h3 {...rest} className={headingClasses}>
      {children}
    </h3>
  );
};

export default ShowcaseTitle;
