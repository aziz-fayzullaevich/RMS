import type { LoginInput, RegisterInput } from "../models/auth-schema";

export interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (values: LoginInput | RegisterInput) => void;
  loading: boolean;
};

export type UserRole = 'ADMIN' | 'USER' | 'GUEST';

export interface IAuthState {
  user: any | null;
  role: UserRole;
  isAuthenticated: boolean;
}