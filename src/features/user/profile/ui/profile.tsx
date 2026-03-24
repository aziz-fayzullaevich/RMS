import { Paper, Stack, Text, Title, Avatar, Group, Divider, Box, Button, Flex } from "@mantine/core";
import { useGetUser } from "../queries/profile-queries";
import { CustomLoader } from "../../../../shared/ui/custom-loader";

export const Profile = () => {
    const { data: profile, isLoading } = useGetUser();

    if (isLoading) return <CustomLoader />;

    return (
        <Flex align="center" justify="center" p="md">
            <Paper radius="md" p="xl" shadow="md" w="100%" bg="#fff" withBorder>
                <Group align="flex-start" gap={40} mb="xl">
                    <Stack align="center" gap="xs" style={{ minWidth: 200 }}>
                        <Avatar
                            src={profile?.image}
                            size={150}
                            radius={100}
                            styles={{ root: { border: '4px solid #f1f1f1' } }}
                        />
                        <Box style={{ textAlign: 'center' }}>
                            <Title order={4}>{profile?.username}</Title>
                            <Text size="sm" c="dimmed">{profile?.email}</Text>
                        </Box>
                    </Stack>

                    <Divider orientation="vertical" visibleFrom="sm" />

                    <Stack gap="xl" style={{ flex: 1 }}>
                        <Title order={2} fw={700} lts={-0.5}>Личные данные</Title>

                        <Stack gap="lg">
                            <Group grow>
                                <InfoBlock label="Имя" value={profile?.firstName} />
                                <InfoBlock label="Фамилия" value={profile?.lastName} />
                            </Group>

                            <Group grow>
                                <InfoBlock label="Дата рождения" value={profile?.birthDate} />
                                <InfoBlock label="Возраст" value={`${profile?.age} лет`} />
                            </Group>

                            <InfoBlock label="Телефон" value={profile?.phone} />
                        </Stack>
                    </Stack>
                </Group>

                <Divider my="lg" />

                <Flex align="center" justify="space-between" gap="md">
                    <Button
                        variant="filled"
                        color="blue"
                        radius="md"
                        size="md"
                        onClick={() => console.log('Edit')}
                    >
                        Изменить данные
                    </Button>

                    <Button
                        variant="light"
                        color="red"
                        radius="md"
                        size="md"
                        onClick={() => {
                            localStorage.removeItem('token');
                        }}
                    >
                        Выйти из профиля
                    </Button>
                </Flex>
            </Paper>
        </Flex>
    );
};

const InfoBlock = ({ label, value }: { label: string, value?: string | number }) => (
    <Stack gap={4}>
        <Text size="xs" c="dimmed" fw={700} style={{ textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            {label}
        </Text>
        <Text size="lg" fw={500}>
            {value || '—'}
        </Text>
    </Stack>
);