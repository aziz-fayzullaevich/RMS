import { z } from 'zod';

const baseAuthFields = {
  login: z
    .string()
    .min(3, 'Логин должен содержать минимум 3 символа')
    .max(20, 'Логин слишком длинный'),
  password: z
    .string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
};

export const loginSchema = z.object({
  ...baseAuthFields,
});

export const registerSchema = z.object({
  ...baseAuthFields,
  firstName: z.string().min(2, 'Введите имя'),
  lastName: z.string().min(2, 'Введите фамилию'),
  birthYear: z
    .number({ invalid_type_error: 'Введите год рождения' })
    .min(1900, 'Год слишком маленький')
    .max(new Date().getFullYear(), 'Год не может быть в будущем'),
  age: z
    .number({ invalid_type_error: 'Укажите возраст' })
    .min(16, 'Минимальный возраст — 16 лет')
    .max(100, 'Некорректный возраст'),
  phone: z
    .string()
    .min(9, 'Некорректный формат номера')
    .regex(/^\+?[0-9]+$/, 'Номер телефона должен содержать только цифры'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;


export const getAuthSchema = (type: 'login' | 'register') => {
  return type === 'login' ? loginSchema : registerSchema;
};