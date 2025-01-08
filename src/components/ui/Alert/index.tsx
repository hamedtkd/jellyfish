import { cn } from "@/lib/utils";
import { alertVariants } from "./alertVariants";
import { VariantProps } from "class-variance-authority";
import React from "react";

export interface alertProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {
    asChild?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, alertProps>(
    ({ className, variant, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(alertVariants({ variant }), className)}
                {...props}
            >
                {children}
            </div>
        );
    },
);

Alert.displayName = "Alert";

export { Alert };
