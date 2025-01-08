import { Button } from "@/components/ui/Button";
import useCheckAvailability from "./useSetUserNameForm";
import { Textfield } from "@/components/ui/Textfield";

const SetUserNameForm = () => {
    const { handleSubmit, register, errors } = useCheckAvailability();
    return (
        <form onSubmit={handleSubmit} className=" space-y-6    ">
            <div className="space-y-2">
                <Textfield
                    labelClasses="uppercase"
                    label="your npub:"
                    className="flex-1"
                    {...register("npub")}
                    type="text"
                    placeholder="npub..."
                />

                {errors.npub && (
                    <p className="text-[#F6543E] text-sm font-roboto-mono animate-fade-right">
                        {errors.npub.message}
                    </p>
                )}
            </div>

            <Button
                className=" w-full  animate-fade-up animate-delay-700 h-14 font-medium font-roboto-mono "
                type="submit"
            >
                Pay
            </Button>
        </form>
    );
};

export default SetUserNameForm;
