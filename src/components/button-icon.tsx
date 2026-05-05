import type { VariantProps } from "class-variance-authority";
import Icon from "./icon";
import { buttonIconVariants, buttonIconIconVariants } from "./styles/button-icon.styles";
import Skeleton from "./skeleton";

interface ButtonIconProps
  extends Omit<React.ComponentProps<"button">, "disabled" | "size">,
  VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  loading,
  icon,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({ variant: "none", size, className })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({ className, variant, size, disabled })}
      {...props}
    >
      <Icon className={buttonIconIconVariants({ size, variant })} svg={icon} />
    </button>
  );
}