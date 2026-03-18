import { Controller, useForm, type DefaultValues, type Path } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, Button, Paper, Stack, NumberInput } from '@mantine/core';
import { getAuthSchema, type LoginInput, type RegisterInput } from '../models/auth-schema';

interface AuthFormProps<T extends LoginInput | RegisterInput> {
    type: 'login' | 'register';
    onSubmit: (values: T) => void;
    loading: boolean;
}

export const AuthForm = <T extends LoginInput | RegisterInput>({
    type,
    onSubmit,
    loading
}: AuthFormProps<T>) => {

    const getDefaultValues = (): DefaultValues<T> => {
        if (type === 'register') {
            return {
                login: '',
                password: '',
                firstName: '',
                lastName: '',
                phone: '',
                birthYear: 0,
                age: 0,
            } as DefaultValues<T>;
        }
        return {
            login: '',
            password: '',
        } as DefaultValues<T>;
    };

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(getAuthSchema(type)),
        defaultValues: getDefaultValues(),
    });

    return (
        <Paper radius="md" p="xl" withBorder>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    {type === 'register' && (
                        <>
                            <TextInput
                                label="Имя"
                                placeholder="Иван"
                                {...register('firstName' as Path<T>)}
                                error={errors.firstName?.message as string}
                            />

                            <TextInput
                                label="Фамилия"
                                placeholder="Иванов"
                                {...register('lastName' as Path<T>)}
                                error={errors.lastName?.message as string}
                            />

                            <Controller
                                name={'birthYear' as Path<T>}
                                control={control}
                                render={({ field }) => (
                                    <NumberInput
                                        {...field}
                                        label="Год рождения"
                                        hideControls
                                        error={errors.birthYear?.message as string}
                                    />
                                )}
                            />

                            <Controller
                                name={'age' as Path<T>}
                                control={control}
                                render={({ field }) => (
                                    <NumberInput
                                        {...field}
                                        label="Возраст"
                                        hideControls
                                        error={errors.age?.message as string}
                                    />
                                )}
                            />

                            <TextInput
                                label="Телефон"
                                placeholder="+998..."
                                {...register('phone' as Path<T>)}
                                error={errors.phone?.message as string}
                            />
                        </>
                    )}

                    <TextInput
                        label="Логин"
                        required
                        {...register('login' as Path<T>)}
                        error={errors.login?.message as string}
                    />

                    <TextInput
                        label="Пароль"
                        type="password"
                        required
                        {...register('password' as Path<T>)}
                        error={errors.password?.message as string}
                    />

                    <Button type="submit" loading={loading} fullWidth size="md">
                        {type === 'login' ? 'Войти' : 'Создать аккаунт'}
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
};