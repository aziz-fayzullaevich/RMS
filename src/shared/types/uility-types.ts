// src/shared/types/base.types.ts
export type ID = string | number;

export interface BaseEntity {
  id: ID;
  createdAt: string;
  updatedAt?: string;
}

// По твоей логике: имя, фамилия, год, возраст, телефон, логин, пароль
export interface IUser extends BaseEntity {
  firstName: string;
  lastName: string;
  birthYear: number;
  age: number;
  phone: string;
  login: string;
  password?: string; // Только для запросов auth
  role: 'admin' | 'user';
}

export type RequestStatus = 'pending' | 'success' | 'rejected';

export interface IRequest extends BaseEntity {
  userId: ID;
  userName: string; // Для таблицы админа, чтобы не делать лишние join
  title: string;
  date: string;
  fileUrl: string;
  description: string;
  status: RequestStatus;
  adminComment?: string;
}

// Utility types для форм
export type AuthPayload = Pick<IUser, 'login' | 'password'> & Partial<Omit<IUser, 'id' | 'role' | 'createdAt'>>;
export type RequestPayload = Pick<IRequest, 'title' | 'date' | 'description' | 'fileUrl'>;