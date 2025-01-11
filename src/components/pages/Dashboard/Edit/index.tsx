import { Button } from "@/components/ui/Button";
import { Textfield } from "@/components/ui/Textfield";
import useFetch from "@/hooks/useFetch";
import { dashboardService } from "@/services/api/dashboard.service";
import { useParams } from "react-router-dom";
import useEdit from "./useEdit";
import { useCallback, useEffect } from "react";
import { MyNpubsCardProps } from "../MyNpubsCard";
const sampleData: MyNpubsCardProps = {
    username: "Ehsan@nosrt.eco",
    npub: "npub1h5h535j4809uf23j8y9t4n23090",
    id: "1",
};

const NpubEditForm = () => {
    const { id } = useParams();

    const fetchUsernames = useCallback(() => {
        return dashboardService
            .getMyUsername(id as string)
            .then(res => res.data.data);
    }, []);
    const { data, loading } = useFetch(fetchUsernames);

    const { handleSubmit, register, errors, setValue } = useEdit();
    useEffect(() => {
        if (data) {
            setValue("npub", data?.npub);
        }
    }, []);

    if (loading) return "Loading...";

    return (
        <form
            onSubmit={handleSubmit}
            className="pt-24 space-y-20 min-h-[80dvh]"
        >
            <header className="flex items-center ">
                <div className="space-y-1 flex-1">
                    <p className="font-roboto-mono text-[#80899F]">
                        Edit your Nip-05 records
                    </p>
                    <h3 className="gradient-text text-[44px] font-bold">
                        {sampleData?.username}
                    </h3>
                </div>
                <Button className="min-w-[153px]" type="submit">
                    Save Changes
                </Button>
            </header>
            <main className="space-y-12 ">
                <div className="space-y-2">
                    <Textfield {...register("npub")} label="NPUB:" />
                    {errors.npub && (
                        <p className="text-[#F6543E] text-sm font-roboto-mono animate-fade-right">
                            {errors.npub.message}
                        </p>
                    )}
                </div>
            </main>
        </form>
    );
};

export default NpubEditForm;
