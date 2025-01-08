import { mainApi } from "../../config/axios.config";
import { ApiResponse } from "../../types/api.types";

export interface UsernameCheckResponse {
    status: number | string;
}

export const usernameService = {
    checkAvailability: (username: string) =>
        mainApi.post<ApiResponse<UsernameCheckResponse>>(
            `/username/check`,
            username,
        ),
    getSuggestions: () =>
        mainApi.get<ApiResponse<string[]>>("/username/suggestions"),
};
