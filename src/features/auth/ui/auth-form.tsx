import { Center, Flex, Image, Paper, Stack, Text } from "@mantine/core";
import rms_logo from '../../../assets/rms-logo.png';
import { Login } from "./login";
import { Register } from "./register";

const AuthForm = () => {
    return (
        <Center h={'100vh'}>
            <Paper shadow="xs" radius="sm" p="xl" bg={'#eee'} h={'90vh'} w={'80vw'} >
                <Flex align="center" justify="space-between" gap={'30px'} h={'100%'} >
                    <Stack align="center" justify="center">
                        <Image
                            src={rms_logo}
                            alt="rms-logo"
                            w={500}
                        />
                        <Text style={{ textAlign: 'center' }} c={"gray"} size="lg">
                            RMS — это система управления внутренними документами и заявками.
                        </Text>
                    </Stack>
                    <Login />
                    {/* <Register /> */}
                </Flex>
            </Paper>
        </Center>
    )
}

export default AuthForm;