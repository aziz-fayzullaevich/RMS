import { api } from "../../../shared/api/auth-api";
import type { LoginUser } from "../types/auth-types";

export const authApi = {
    login: async ({ data }: { data: Partial<LoginUser> }) => {
        const res = await api.post('login', {
            username: data.username,
            password: data.password
        });
        return res.data;
    }
};