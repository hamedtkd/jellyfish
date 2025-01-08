import { cva } from "class-variance-authority";

export const alertVariants = cva(
    " text-[18px] font-roboto-mono leading-[33.71px] rounded-[8px] px-2 h-[34px] flex justify-center items-center",
    {
        variants: {
            variant: {
                success: "text-[#30E0A1]",
                error: " text-[#F6543E] bg-[#F6543E1A]",
            },
        },
        defaultVariants: {
            variant: "success",
        },
    },
);
