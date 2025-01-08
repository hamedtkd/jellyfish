import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}

const Tag = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "font-roboto-mono text-base py-2 px-[6px] flex items-center justify-center h-[31px] rounded-[6px] text-[#80899F] bg-[#282E4A]",
                    className,
                )}
                {...props}
            >
                {children}
            </button>
        );
    },
);

export default Tag;
