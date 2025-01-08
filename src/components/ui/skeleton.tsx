import { cn } from "@/lib/utils";
import React from "react";

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-[rgba(40,46,74,0.8)] ",
                className,
            )}
            {...props}
        />
    );
}

export { Skeleton };
