import { notifications } from '@mantine/notifications';
import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

api.interceptors.response.use(
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