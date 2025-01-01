import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/layout/RootLayout";
import { HomePage, NotFoundPage } from "@/components/pages";

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
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);
