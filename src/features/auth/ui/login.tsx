import { Button, PasswordInput, Stack, TextInput, Title } from "@mantine/core"
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";

export const Login = () => {
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <Stack style={{ width: '100%' }}>
      <Title order={2} style={{ textAlign: 'center' }}>Войти в систему</Title>  <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextInput
            label="Логин"
            placeholder="exmample@gmail.com"
            withAsterisk
            {...register('email', { required: 'Обязательное поле' })}
            error={errors.email?.message}
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
            <Button w={'100%'} type="submit">Войти</Button>
            <Link to={ROUTES.AUTH.REGISTER} style={{ color: "gray" }}>Зарегистрировать</Link>
          </Stack>
        </Stack>
      </form>
    </Stack>

  )
}