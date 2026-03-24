import { AppShell, Burger, Group, ActionIcon, Avatar, useMantineColorScheme, Select, Image, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon, IconLanguage } from '@tabler/icons-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../widgets/sidebar';
import { ROUTES } from '../constants/routes';
import rms_logo from '../../assets/rms-logo.png';
import { CustomBreadcrumbs } from '../ui/custom-breadcrumbs';

function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const navigate = useNavigate();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header p="xs">
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Image src={rms_logo} w={100} h={50} />
          </Group>

          <Group gap="sm">
            <ActionIcon variant="default" onClick={toggleColorScheme} size="lg" title="Сменить тему">
              {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
            </ActionIcon>

            <Select leftSection={<IconLanguage size={20} />}
              w={180}
              placeholder='Смена языка'
              variant='default'
            />

            <Avatar
              radius="xl"
              color="blue"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(ROUTES.USER.PROFILE)}
            >
              U
            </Avatar>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="xs">
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main bg={colorScheme === 'dark' ? 'dark.8' : 'gray.0'}>
        <Stack>
          <CustomBreadcrumbs />
          <Outlet />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;