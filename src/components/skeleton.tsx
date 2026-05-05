import type React from "react";
import { skeletonVariants } from "./styles/skeleton.styles";
import type { VariantProps } from "class-variance-authority";

interface SkeletonProps extends VariantProps<typeof skeletonVariants>,
    React.ComponentProps<"div"> { }

export default function Skeleton({
    rounded,
    className,
    ...props
}: SkeletonProps) {
    return <div className={skeletonVariants({ rounded, className })} {...props} />
}