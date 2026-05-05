import React from 'react';
import type { VariantProps } from "class-variance-authority";
import { iconVariants } from "./styles/icon.styles";

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
    svg: React.ComponentType<React.ComponentProps<"svg">>
}

export default function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
    return <SvgComponent className={iconVariants({ animate, className })} {...props} />
}