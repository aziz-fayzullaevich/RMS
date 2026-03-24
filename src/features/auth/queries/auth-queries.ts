import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../api/auth-api';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../shared/constants/routes';
import { notifications } from '@mantine/notifications';
import type { LoginUser } from '../types/auth-types';

export const useAuthQueries = {
    useLogin: () => {
        const navigate = useNavigate();
        const queryClient = useQueryClient();

        return useMutation({
            mutationFn: ({ data }: { data: Partial<LoginUser> }) => authApi.login({ data }),

            onSuccess: (user) => {
                queryClient.setQueryData(['user'], user);
                if (user && user.accessToken) {
                    localStorage.setItem('token', user.accessToken);
                    localStorage.setItem('user', JSON.stringify(user));

                    if (user.role === 'admin') {
                        navigate(ROUTES.ADMIN.PROFILE);
                    } else {
                        navigate(ROUTES.USER.PROFILE)
                    }
                }
            },

            onError: () => {
                notifications.show({
                    message: 'Неверный логин или пароль',
                    color: 'red'
                });
            }
        });
    },
};