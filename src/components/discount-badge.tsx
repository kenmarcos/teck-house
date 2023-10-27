import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "./ui/badge";

interface DiscountBadgeProps extends BadgeProps {
  iconSize?: number;
}

const DiscountBadge = ({
  children,
  iconSize = 16,
  ...rest
}: DiscountBadgeProps) => {
  return (
    <Badge {...rest}>
      <ArrowDownIcon size={iconSize} />
      {children}%
    </Badge>
  );
};

export default DiscountBadge;
