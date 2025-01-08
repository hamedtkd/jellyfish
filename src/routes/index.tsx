import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/layout/RootLayout";
import { HomePage, NotFoundPage } from "@/components/pages";
import AvailabilityPage from "@/components/pages/Availability";
import SetUserName from "@/components/pages/SetUserName";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/availability",
                element: <AvailabilityPage />,
            },
            {
                path: "/set-username",
                element: <SetUserName />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);
