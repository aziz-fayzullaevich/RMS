import { api } from "../../../../shared/api/auth-api"
import type { User } from "../types/profile-types"

export const getUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const { data } = await api.get<User>('me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
};