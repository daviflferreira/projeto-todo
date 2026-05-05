import { cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./styles/text.styles";
import { inputTextVariants } from "./styles/input-text.styles";

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> { }

export default function InputText({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}