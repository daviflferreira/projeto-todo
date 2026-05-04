import type { VariantProps } from "class-variance-authority";
import Text from "./text";
import { badgeVariants, badgeTextVariants } from "./styles/badge.styles";

interface BadgeProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof badgeVariants> { }

export default function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}