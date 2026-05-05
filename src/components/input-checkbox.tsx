import type { VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton"

import CheckIcon from "../assets/icons/check.svg?react";
import Icon from "./icon";
import {
    inputCheckboxWrapperVariants,
    inputCheckboxVariants,
    inputCheckboxIconVariants,
} from "./styles/input-checkbox.styles";

interface InputCheckboxProps
    extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
    loading?: boolean;
}

export default function InputCheckbox({
    size,
    disabled,
    className,
    variant,
    loading,
    ...props
}: InputCheckboxProps) {
    if (loading) {
        return (
            <Skeleton
                rounded="sm"
                className={inputCheckboxVariants({ variant: "none", size })}
            />
        );
    }

    return (
        <label className={inputCheckboxWrapperVariants({ className })}>
            <input
                type="checkbox"
                className={inputCheckboxVariants({ variant, size, disabled })}
                {...props}
            />
            <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
        </label>
    );
}