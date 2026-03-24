import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getUser } from "../api/profile-api"

export const useGetUser = () => {
    return useQuery({
        queryKey: ['user-profile'],
        queryFn: getUser,
        staleTime: 60_000,
        placeholderData: keepPreviousData,
        enabled: true
    })
};