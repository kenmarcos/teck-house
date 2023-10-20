import { ReactNode } from "react";

interface ShowCaseTitleProps {
  children: ReactNode;
}

const ShowcaseTitle = ({ children }: ShowCaseTitleProps) => {
  return <h3 className="text-lg font-bold uppercase">{children}</h3>;
};

export default ShowcaseTitle;
