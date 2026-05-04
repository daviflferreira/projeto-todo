import type { VariantProps } from "class-variance-authority";

import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";
import {
    inputCheckboxWrapperVariants,
    inputCheckboxVariants,
    inputCheckboxIconVariants,
} from "./styles/input-checkbox.styles";

interface InputCheckboxProps
    extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> { }

export default function InputCheckbox({
    size,
    disabled,
    className,
    ...props
}: InputCheckboxProps) {
    return (
        <label className={inputCheckboxWrapperVariants({ className })}>
            <input
                type="checkbox"
                className={inputCheckboxVariants({ size, disabled })}
                {...props}
            />
            <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
        </label>
    );
}