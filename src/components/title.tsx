import { ReactNode } from "react";
import { Badge } from "./ui/badge";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h2>
      <Badge variant="outline" className="gap-2 px-3 py-2 uppercase">
        {children}
      </Badge>
    </h2>
  );
};

export default Title;
