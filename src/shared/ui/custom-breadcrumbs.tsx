import { Breadcrumbs, Anchor } from '@mantine/core';
import { useLocation, Link } from 'react-router-dom';
import { ROUTE_TITLES } from '../constants/route-title';

export const CustomBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    const items = pathnames.map((_, index) => {
        const path = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;

        return isLast ? (
            <span key={path}>{ROUTE_TITLES[path] || path}</span>
        ) : (
            <Anchor component={Link} to={path} key={path}>
                {ROUTE_TITLES[path] || path}
            </Anchor>
        );
    });

    return (
        <Breadcrumbs style={{ opacity: '0.6' }}>{items}</Breadcrumbs>
    )
};