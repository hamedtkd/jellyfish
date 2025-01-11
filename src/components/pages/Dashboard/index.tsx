import { dashboardService } from "@/services/api/dashboard.service";
import MyNpubsCard, { MyNpubsCardProps } from "./MyNpubsCard";
import { Skeleton } from "@/components/ui/skeleton";
import AnimateWrapper from "@/components/AnimateWrapper";
import useFetch from "@/hooks/useFetch";
import { useCallback } from "react";
const sampleData: MyNpubsCardProps[] = [
    {
        username: "Ehsan@nosrt.eco",
        npub: "npub1h5h535j4809uf23j8y9t4n23090",
        id: "1",
        // items: [
        //     {
        //         name: "npub",
        //         value: "npub1h5h535j4809uf23j8y9t4n23090",
        //     },
        // ],
    },
];

const Dashboard = () => {
    const fetchUsernames = useCallback(() => {
        return dashboardService.getMyUsernames().then(res => res.data.data);
    }, []);
    const { data, loading, error } = useFetch(fetchUsernames);

    if (error)
        return (
            <p className=" flex h-[80vh] flex items-center text-[56px] text-center justify-center gradient-text">
                Error: {error.message}
            </p>
        );

    return (
        <main className="space-y-[107px] pt-24">
            <h2 className="text-[64px] gradient-text uppercase ">
                Hi, welcome
                {/* TODO: add username */}
            </h2>
            <section className="flex flex-col gap-6 min-h-[65dvh] ">
                {loading ? (
                    <>
                        <Skeleton className="w-full h-[150px] rounded-[22px]" />
                        <Skeleton className="w-full h-[150px] rounded-[22px]" />
                    </>
                ) : data && data.length > 0 ? (
                    data?.map((card, key) => (
                        <AnimateWrapper key={key} delay={key * 0.2}>
                            <MyNpubsCard {...card} />
                        </AnimateWrapper>
                    ))
                ) : sampleData ? (
                    sampleData?.map((card, key) => (
                        <AnimateWrapper key={key} delay={key * 0.2}>
                            <MyNpubsCard {...card} />
                        </AnimateWrapper>
                    ))
                ) : (
                    "Not any username"
                )}
            </section>
        </main>
    );
};

export default Dashboard;
