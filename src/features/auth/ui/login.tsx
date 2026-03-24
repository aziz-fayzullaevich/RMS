import { Button, PasswordInput, Stack, TextInput, Title } from "@mantine/core"
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";
import { useAuthQueries } from "../queries/auth-queries";
import type { LoginUser } from "../types/auth-types";

export const Login = () => {

  const { mutate: handleLogin, isPending } = useAuthQueries.useLogin();

  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = (data: Partial<LoginUser>) => {
    handleLogin({ data })
    reset();
  };

  return (
    <Stack style={{ width: '100%' }}>
      <Title order={2} style={{ textAlign: 'center' }}>Войти в систему</Title>  <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextInput
            label="Логин"
            placeholder="Введите логин"
            withAsterisk
            {...register('username', { required: 'Обязательное поле' })}
            error={errors.username?.message}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Обязательное поле' }}

            render={({ field }) => (
              <PasswordInput
                {...field}
                label="Пароль"
                placeholder="********"
                withAsterisk
                size="md"
                error={errors.password?.message}
              />
            )}
          />
          <Stack align="center">
            <Button w={'100%'} type="submit" loading={isPending}>Войти</Button>
            <Link to={ROUTES.AUTH.REGISTER} style={{ color: "gray" }}>Зарегистрировать</Link>
          </Stack>
        </Stack>
      </form>
    </Stack>
  )
};