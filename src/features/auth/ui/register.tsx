import { Button, Grid, GridCol, NumberInput, PasswordInput, Stack, TextInput, Title } from "@mantine/core"
import { DateInput } from "@mantine/dates";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";

export const Register = () => {
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      username: '',
      lastname: '',
      birthday: '',
      age: '',
      phone: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <Stack style={{ width: '100%' }}>
      <Title order={2} style={{ textAlign: 'center' }}>Регистрация</Title>  <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>

          <TextInput
            label="Имя"
            placeholder="Введите имя"
            withAsterisk
            {...register('username', { required: 'Обязательное поле' })}
            error={errors.username?.message}
          />

          <TextInput
            label="Фамилия"
            placeholder="Введите фамилию"
            withAsterisk
            {...register('lastname', { required: 'Обязательное поле' })}
            error={errors.lastname?.message}
          />

          <Grid>

            <GridCol span={6}>
              <Controller
                name="birthday"
                control={control}
                rules={{ required: 'Обязательное поле' }}

                render={({ field }) => (
                  <DateInput
                    {...field}
                    label="Дата рождения"
                    placeholder="Укажите дату рождению"
                    withAsterisk
                    size="md"
                    error={errors.birthday?.message}
                  />
                )}
              />
            </GridCol>

            <GridCol span={6}>
              <Controller
                name="age"
                control={control}
                rules={{ required: 'Обязательное поле' }}

                render={({ field }) => (
                  <NumberInput
                    {...field}
                    label="Возраст"
                    placeholder="Укажите ваш возраст"
                    withAsterisk
                    size="md"
                    error={errors.age?.message}
                  />
                )}
              />
            </GridCol>
          </Grid>

          <Controller
            name="phone"
            control={control}
            rules={{ required: 'Обязательное поле' }}

            render={({ field }) => (
              <TextInput
                {...field}
                label="Телефон номер"
                placeholder="Укажите ваш тел номер"
                type="tel"
                withAsterisk
                size="md"
                error={errors.phone?.message}
              />
            )}
          />

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
                placeholder="Создайте пароль"
                withAsterisk
                size="md"
                error={errors.password?.message}
              />
            )}
          />
          <Stack align="center">
            <Button w={'100%'} type="submit">Зрегистрироваться</Button>
            <Link to={ROUTES.AUTH.LOGIN} style={{ color: "gray" }}>Назад</Link>
          </Stack>
        </Stack>
      </form>
    </Stack>
  )
}