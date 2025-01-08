import { Skeleton } from "@/components/ui/skeleton";
import Tag from "@/components/ui/Tag";
import { usernameService } from "@/services/api/username.service";
import { useEffect, useState } from "react";

const NameSuggestions = () => {
    const [data, setData] = useState<string[]>();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                const res = await usernameService.getSuggestions();
                setData(res.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);
    return (
        <div className="space-y-6">
            <h4 className="gradient-text text-xl font-bold">
                Name suggestions:
            </h4>
            {loading ? (
                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton className="h-[31px] w-[139px]" key={index} />
                    ))}
                </div>
            ) : data && data?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                    {data?.map((tag, key) => <Tag key={key}>{tag}</Tag>)}
                </div>
            ) : (
                "No result found!"
            )}
        </div>
    );
};

export default NameSuggestions;
