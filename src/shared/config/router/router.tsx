import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, replace } from "react-router-dom";
import Layout from "../../layout/layout";
import { ROUTES } from "../../constants/routes";
import { CustomLoader } from "../../ui/custom-loader";
import { ProtectedRoute } from "./protected-route";

const LoginPage = lazy(() => import('../../../pages/auth/login'));
const RegisterPage = lazy(() => import('../../../pages/auth/register'));

const UserDashboard = lazy(() => import('../../../pages/user/login-main-page'));
const MyRequests = lazy(() => import('../../../pages/user/my-requests'));
const RequestList = lazy(() => import('../../../pages/user/request-list'));
const UserProfile = lazy(() => import('../../../pages/user/profile'));

const UsersList = lazy(() => import('../../../pages/admin/admin-main-page'));
const AllRequests = lazy(() => import('../../../pages/admin/all-requsts'));
const AdminProfile = lazy(() => import('../../../pages/admin/profile'));

const mockAuth = {
    isAuthenticated: true,
    role: 'USER' as const,
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute isAllowed={mockAuth.isAuthenticated} />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Navigate to={mockAuth.role === 'ADMIN' ? '/admin' : ROUTES.USER.DASHBOARD} replace />,
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
  {
    path: ROUTES.AUTH.LOGIN,
    element: <Suspense fallback={<CustomLoader />}><LoginPage /></Suspense>,
  },
  {
    path: ROUTES.AUTH.REGISTER,
    element: <Suspense fallback={<CustomLoader />}><RegisterPage /></Suspense>,
  },
]);