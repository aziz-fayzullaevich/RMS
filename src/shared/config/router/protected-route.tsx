import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

interface ProtectedRouteProps {
    isAllowed: boolean;
    redirectPath?: string;
}

export const ProtectedRoute = ({
    isAllowed,
    redirectPath = ROUTES.AUTH.LOGIN
}: ProtectedRouteProps) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};