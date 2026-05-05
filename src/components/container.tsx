import React from "react";
import { containerVariants } from "./styles/container.styles";
import type { VariantProps } from "class-variance-authority";

interface ContainerProps extends VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
    as = "div",
    children,
    className,
    ...props
}: ContainerProps) {
    return React.createElement(
        as,
        {
            className: containerVariants({ size: "md", className }),
            ...props,
        },
        children
    );
} 