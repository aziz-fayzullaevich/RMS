import { IconMail, IconHome, IconMenu2, IconUserCircle, IconUsersGroup, IconMailShare, IconChecklist } from '@tabler/icons-react';
import { ROUTES } from './routes';

export const USER_SIDEBAR_LINKS = [
    { label: 'Главная страница', icon: IconHome, link: ROUTES.USER.DASHBOARD },
    { label: 'Мои заявки', icon: IconMail, link: ROUTES.USER.MY_REQUESTS },
    { label: 'Список запросов', icon: IconMenu2, link: ROUTES.USER.REQUEST_LIST },
    { label: 'Профиль', icon: IconUserCircle, link: ROUTES.USER.PROFILE },
];

export const ADMIN_SIDEBAR_LINKS = [
    { label: 'Список пользователи', icon: IconUsersGroup, link: ROUTES.ADMIN.USERS_LIST },
    { label: 'Общие заявки', icon: IconChecklist, link: ROUTES.ADMIN.ALL_REQUESTS },
    { label: 'Приходящие заявки', icon: IconMailShare, link: ROUTES.ADMIN.INCOMING },
    { label: 'Профиль', icon: IconUserCircle, link: ROUTES.ADMIN.PROFILE },
];