import { notifications } from '@mantine/notifications';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const http = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

http.interceptors.response.use(
    (response) => response,
    (error) => {
        notifications.show({
            title: 'API Error:',
            message: error.response?.data || error.message,
            color: 'red'
        }
        );
        return Promise.reject(error);
    }
);