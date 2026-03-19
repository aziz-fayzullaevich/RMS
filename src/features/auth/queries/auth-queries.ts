import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api/auth-api';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../shared/constants/routes';
import type { LoginInput, RegisterInput } from '../models/auth-schema';
import { notifications } from '@mantine/notifications';

export const useAuthMutations = () => {
    const navigate = useNavigate();

    const registerMutation = useMutation({
        mutationFn: (data: RegisterInput) => authApi.register(data),
        onSuccess: () => {
            navigate(ROUTES.AUTH.LOGIN);
        },
    });

    const loginMutation = useMutation({
        mutationFn: (data: LoginInput) => authApi.login(data),
        onSuccess: (users) => {
            if (users.length > 0) {
                const user = users[0];
                localStorage.setItem('user', JSON.stringify(user));

                if (user.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate(ROUTES.USER.DASHBOARD);
                }
            } else {
                notifications.show({
                    message: 'Неверный логин или пароль',
                    color: 'red'
                });
            }
        },
    });

    return {
        register: registerMutation,
        login: loginMutation,
    };
};