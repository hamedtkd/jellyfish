import * as React from "react";

import { cn } from "@/lib/utils";

export interface ShimmerInputProps {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    label?: string;
    labelClasses?: string;
    parentClasses?: string;
}

const Textfield = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input"> & ShimmerInputProps
>(
    (
        {
            shimmerColor = "#BFE0F075",
            shimmerSize = "0.05em",
            shimmerDuration = "13s",
            borderRadius = "14px",
            background = "#A0C5F73F",
            className,
            type,
            label,
            labelClasses,
            parentClasses,
            id,
            ...props
        },
        ref,
    ) => {
        return (
            <div className={cn("space-y-2 w-full", parentClasses)}>
                <label
                    className={cn(
                        "text-xl font-bold gradient-text",
                        labelClasses,
                    )}
                    htmlFor={id}
                >
                    {label}
                </label>
                <div
                    style={
                        {
                            "--spread": "120deg",
                            "--shimmer-color": shimmerColor,
                            "--radius": borderRadius,
                            "--speed": shimmerDuration,
                            "--cut": shimmerSize,
                            "--bg": background,
                            "--focus-bg": "#ACCDF2",
                            "--focus-speed": "3s",
                        } as React.CSSProperties
                    }
                    className={cn(
                        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-[1px] py-[1px] [background:var(--bg)] [border-radius:var(--radius)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
                        " focus-within:[background:var(--focus-bg)]  focus-within:[animation-duration:var(--focus-speed)] transition-all duration-700",
                        className,
                    )}
                >
                    <div
                        className={cn(
                            "-z-30",
                            "absolute inset-0 overflow-visible [container-type:size]",
                        )}
                    >
                        {/* spark */}
                        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none] group-focus-within:animate-shimmer-slide-fast">
                            {/* spark before */}
                            <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                        </div>
                    </div>
                    <input
                        id={id}
                        type={type}
                        className={cn(
                            "flex h-14 font-roboto-mono w-full z-20 rounded-[14px] bg-[#141B30] bg-gradient-to-r from-[rgba(31,36,58,0.75)] to-[rgba(17,22,40,0.675)] px-3 py-[18px] text-[#F3F5FB] text-base shadow-sm transition-colors placeholder:text-[#80899F] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                            className,
                        )}
                        ref={ref}
                        {...props}
                    />
                </div>
            </div>
        );
    },
);
Textfield.displayName = "Textfield";

export { Textfield };
