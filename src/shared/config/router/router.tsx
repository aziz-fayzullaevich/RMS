import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../layout/layout";
import { ROUTES } from "../../constants/routes";
import { CustomLoader } from "../../ui/custom-loader";
import { ProtectedRoute } from "./protected-route";
import LoginPage from "../../../pages/auth/login-page";
import RegisterPage from "../../../pages/auth/register-page";

const AuthPage = lazy(() => import('../../../pages/auth/auth-page'));

const UserDashboard = lazy(() => import('../../../pages/user/login-main-page'));
const MyRequests = lazy(() => import('../../../pages/user/my-requests'));
const RequestList = lazy(() => import('../../../pages/user/request-list'));
const UserProfile = lazy(() => import('../../../pages/user/profile'));

// -=ADMIN-DASHBOARD=-
// const UsersList = lazy(() => import('../../../pages/admin/admin-main-page'));
// const AllRequests = lazy(() => import('../../../pages/admin/all-requsts'));
// const AdminProfile = lazy(() => import('../../../pages/admin/profile'));

const HomeRedirect = () => {
  const userData = localStorage.getItem('user');
  if (!userData) return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  
  const user = JSON.parse(userData);
  return user.role === 'admin' 
    ? <Navigate to={ROUTES.ADMIN.PROFILE} replace /> 
    : <Navigate to={ROUTES.USER.PROFILE} replace />;
};

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Navigate to={ROUTES.AUTH.LOGIN} replace />
  },
  {
    path: ROUTES.AUTH.AUTH,
    element: <Suspense fallback={<CustomLoader />}>
      <AuthPage />
    </Suspense>,
    children: [
      {
        index: true,
        element: <Navigate to='login' replace />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  },
  {
    path: '/',
    element: <ProtectedRoute/>,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: < HomeRedirect/>,
          },
          {
            path: ROUTES.USER.DASHBOARD,
            element: (
              <Suspense fallback={<CustomLoader />}>
                <UserDashboard />
              </Suspense>
            ),
          },
          {
            path: ROUTES.USER.MY_REQUESTS,
            element: (
              <Suspense fallback={<CustomLoader />}>
                <MyRequests />
              </Suspense>
            ),
          },
          {
            path: ROUTES.USER.REQUEST_LIST,
            element: (
              <Suspense fallback={<CustomLoader />}>
                <RequestList />
              </Suspense>
            ),
          },
          {
            path: ROUTES.USER.PROFILE,
            element: (
              <Suspense fallback={<CustomLoader />}>
                <UserProfile />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },

]);