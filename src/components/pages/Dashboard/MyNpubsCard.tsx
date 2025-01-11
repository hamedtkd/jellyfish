import { buttonVariants } from "@/components/ui/Button/buttonVariants";
import Tag from "@/components/ui/Tag";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export type MyNpubsCardProps = {
    id: string;
    username: string;
    npub: string;
    // items: { name: string; value: string }[];
};

const MyNpubsCard = ({ username, id, npub }: MyNpubsCardProps) => {
    return (
        <div
            className="relative rounded-[22px] "
            style={{
                background:
                    "linear-gradient(329.52deg, rgba(160, 197, 247, 0.248) -2.39%, rgba(191, 224, 240, 0.458552) 54.92%, rgba(17, 22, 40, 0.62) 98.88%)",
            }}
        >
            <div
                className="py-7 px-4 space-y-6 scale-y-[99.1%] scale-x-[99.8%] rounded-[22px]"
                style={{
                    background:
                        " linear-gradient(180deg, rgba(31, 36, 58, 0.75) 0%, rgba(17, 22, 40, 0.675) 100%)",
                }}
            >
                <header className="flex justify-between">
                    <p className="flex-1 text-[#ACCDF2] font-roboto-mono text-[36px]">
                        {username}
                    </p>
                    <Link
                        to={`/dashboard/edit/${id}`}
                        className={cn(buttonVariants(), "min-w-[112px] h-12")}
                    >
                        {" "}
                        Edit
                    </Link>
                </header>
                <main className="grid grid-cols-2">
                    <div className="flex gap-1 items-center">
                        <Tag>npub</Tag>
                        <p className="text-white font-medium font-roboto-mono">
                            {npub}
                        </p>
                    </div>
                    {/* {items.map((item, key) => (
                        <div
                            className="flex gap-1 items-center"
                            key={key + item.value}
                        >
                            <Tag>{item.name}</Tag>
                            <p className="text-white font-medium font-roboto-mono">
                                {item.value}
                            </p>
                        </div>
                    ))} */}
                </main>
            </div>
        </div>
    );
};

export default MyNpubsCard;
