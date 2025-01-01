import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            <h1 className="text-white text text-center  py-16 text-[80px] uppercase max-w-[873px] mx-auto leading-[56px]">
                Give a better nostr id for yourself
            </h1>
            <div className="flex justify-center">
                <Link to="/npub">Click</Link>
            </div>
        </div>
    );
};
