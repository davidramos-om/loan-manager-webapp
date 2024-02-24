import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack
} from '@chakra-ui/react'

export function CallToActionWithAnnotation() {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Un cuenta anonima <br />
                        <Text as={'span'} color={'green.400'}>
                            es lo unico que necesitas
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Comienza a usar la aplicacion con una cuenta anonima, no necesitas correo electronico, ni numero de telefono, ni nombre, ni nada.
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={10}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Button
                            colorScheme={'green'}
                            bg={'green.400'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'green.500',
                            }}>
                            Crear cuenta
                        </Button>
                        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                            Ingresar con cuenta existente
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}