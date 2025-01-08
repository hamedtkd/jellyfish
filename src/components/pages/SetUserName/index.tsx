import { useSearchParams } from "react-router-dom";
import IsAvailableUserName from "./IsAvailableUserName";
import SetUserNameForm from "./SetUserNameForm";
import CheckAvailabilityForm from "../Availability/CheckAvailabity/CheckAvailabilityForm";
import { UsernameStatus } from "@/enums/usernameStatus";
import { cn } from "@/lib/utils";
import NameSuggestions from "./NameSuggestions";

const SetUserName = () => {
    const [searchParams] = useSearchParams();
    const username = searchParams.get("username");
    const status = searchParams.get("status");
    const isUsernameAvailable = Number(status) === UsernameStatus.AVAILABLE;

    return (
        <section
            className={cn("container mx-auto py-[152px]  ", {
                "space-y-[111px]": isUsernameAvailable,
                "space-y-[72px]": !isUsernameAvailable,
            })}
        >
            <IsAvailableUserName
                isUsernameAvailable={isUsernameAvailable}
                username={username}
                status={status}
            />
            <div className="max-w-[645px] mx-auto space-y-6 ">
                {isUsernameAvailable ? (
                    <>
                        <SetUserNameForm />
                        <div>
                            <p className=" text-sm font-roboto-mono text-[#80899F]">
                                Lifetime payment for{" "}
                                <span className="font-bankGothic text-base font-light">
                                    {" "}
                                    {username}{" "}
                                </span>{" "}
                                5000 sats{" "}
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <NameSuggestions />
                        <div className="space-y-6">
                            <h4 className="gradient-text text-xl font-bold">
                                OR Type another name:
                            </h4>
                            <CheckAvailabilityForm />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default SetUserName;
