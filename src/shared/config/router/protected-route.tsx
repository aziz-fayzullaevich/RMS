import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const ProtectedRoute = () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
    }

    return <Outlet />;
};