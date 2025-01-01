import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
    const { pathname } = useLocation();
    return (
        <div className="relative">
            <div className=" -z-50 absolute top-0 left-1/2 -translate-x-1/2 animate-fade">
                <img src="/svg/top-light.svg" alt="top-light" />
            </div>
            {pathname !== "/" && (
                <div className=" -z-50 absolute -top-[200px] left-1/2 -translate-x-1/2 ">
                    <img
                        className="animate-fade-up"
                        src="/svg/half-ring.svg"
                        alt="/half-ring"
                        height={894}
                        width={806}
                    />
                </div>
            )}
            <main className="container mx-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
