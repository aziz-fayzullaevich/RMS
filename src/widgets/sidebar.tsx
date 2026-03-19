import { NavLink, Stack, Text, Box } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_SIDEBAR_LINKS, USER_SIDEBAR_LINKS } from '../shared/constants/sidebar-linsk';

export const Sidebar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <Box h="100%" display="flex" style={{ flexDirection: 'column' }}>
            <Stack gap={4} flex={1}>
                {USER_SIDEBAR_LINKS.map((item) => (
                    <NavLink
                        key={item.link}
                        active={pathname === item.link}
                        label={item.label}
                        leftSection={<item.icon size="1.2rem" stroke={1.5} />}
                        onClick={() => navigate(item.link)}
                        variant="filled"
                    />
                ))}
            </Stack>

            <Box pt="md" style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}>
                <Text size="xs" c="dimmed" style={{ textAlign: "center" }}>RMS v1.0.0</Text>
            </Box>
        </Box>
    );
};