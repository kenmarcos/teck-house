import { ReactNode } from "react";

interface ShowcaseProps {
  children: ReactNode;
}

const Showcase = ({ children }: ShowcaseProps) => {
  return (
    <section className="mt-7 space-y-5 md:px-5 lg:px-10">{children}</section>
  );
};

export default Showcase;
