import { MyNpubsCardProps } from "@/components/pages/Dashboard/MyNpubsCard";
import { mainApi } from "../../config/axios.config";
import { ApiResponse } from "../../types/api.types";

export const dashboardService = {
    getMyUsernames: () =>
        mainApi.get<ApiResponse<MyNpubsCardProps[]>>(`/usernames`),
    getMyUsername: (id: string) =>
        mainApi.get<ApiResponse<MyNpubsCardProps>>(`/usernames/username/${id}`),
    editMyUsernames: (id: string, data: { npub: string }) =>
        mainApi.put<ApiResponse<any>>(`/usernames/username/${id}`, data),
};
