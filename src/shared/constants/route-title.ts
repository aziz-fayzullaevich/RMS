import { ROUTES } from "../constants/routes";

export const ROUTE_TITLES: Record<string, string> = {
  [ROUTES.USER.DASHBOARD]: 'Главная',
  [ROUTES.USER.MY_REQUESTS]: 'Мои заявки',
  [ROUTES.USER.REQUEST_LIST]: 'Список заявок',
  [ROUTES.USER.PROFILE]: 'Профиль',

  [ROUTES.ADMIN.USERS_LIST]: 'Список пользователи',
  [ROUTES.ADMIN.ALL_REQUESTS]: 'Все заявки',
  [ROUTES.ADMIN.INCOMING]: 'Приходящие заявки',
  [ROUTES.ADMIN.PROFILE]: 'Профиль админа',
};