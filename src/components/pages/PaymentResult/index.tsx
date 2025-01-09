import { buttonVariants } from "@/components/ui/Button/buttonVariants";
import Tag from "@/components/ui/Tag";
import { PaymentStatus } from "@/enums/paymentStatus";
import { cn } from "@/lib/utils";
import { Link, useSearchParams } from "react-router-dom";

const PaymentResult = () => {
    const [searchParams] = useSearchParams();
    const paymentStatus = searchParams.get("status");
    const isItPayed = Number(paymentStatus) === PaymentStatus.SUCCESSFUL;
    const title = isItPayed
        ? "   Payment was Successful"
        : "Payment was Failed ";
    const description = isItPayed
        ? "you can use your nip-05 address on your client right now and share it with everyone! "
        : " ";
    return (
        <main className="space-y-16  mx-auto  pt-[254px] min-h-[90dvh]">
            <div className="flex flex-col items-center gap-7 ">
                <Tag className="animate-fade-down animate-delay-100">
                    Payment result
                </Tag>
                <div className="space-y-4  ">
                    <h2 className="gradient-text text-center font-bold   text-[64px] uppercase animate-fade-up animate-delay-300 ">
                        {title}
                    </h2>
                    <p className="text-center text-lg text-[#80899F] max-w-[729px] mx-auto font-roboto-mono animate-fade-up animate-delay-500">
                        {description}
                    </p>
                </div>
                <div className="w-full [&_button]:flex-1  flex gap-5  max-w-[729px] mx-auto animate-fade-up animate-delay-700">
                    {/* TODO: update links */}
                    <Link
                        className={cn(
                            buttonVariants({ variant: "secondary" }),
                            "flex-1 ",
                        )}
                        to={isItPayed ? "/" : "/availability"}
                    >
                        {isItPayed ? "Back to home " : "Choose another name"}
                    </Link>
                    <Link
                        className={cn(buttonVariants(), "flex-1 ")}
                        to="/availability"
                    >
                        {isItPayed ? "Manage" : "  Try again "}
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default PaymentResult;
