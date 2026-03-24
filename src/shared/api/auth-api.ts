import axios from "axios";

const AUTH_API = import.meta.env.VITE_AUTH_API_URL;

export const api = axios.create({
    baseURL: AUTH_API,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    };
    return config;
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        };
        return Promise.reject(error);
    }
);