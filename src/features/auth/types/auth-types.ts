export type RegisterUser = {
    id: number;
    firstName: string;
    lastname: string;
    date: string;
    age: number;
    phone: string;
    email: string;
    password: string;
};

export type LoginUser = {
    username: string;
    email: string;
    password: string;
    accessToken: string;
    refreshToken: string;
};