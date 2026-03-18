import { IconMail, IconHome, IconMenu2, IconUserCircle } from '@tabler/icons-react';
import { ROUTES } from './routes';

export const USER_SIDEBAR_LINKS = [
    { label: 'Главная страница', icon: IconHome, link: ROUTES.USER.DASHBOARD },
    { label: 'Мои заявки', icon: IconMail, link: ROUTES.USER.MY_REQUESTS },
    { label: 'Список запросов', icon: IconMenu2, link: ROUTES.USER.REQUEST_LIST },
    { label: 'Профиль', icon: IconUserCircle, link: ROUTES.USER.PROFILE },
];