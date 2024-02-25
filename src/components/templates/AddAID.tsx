import { Button, FormControl, Heading, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export function AddExistingAnonymousAccountForm() {
  const stackBg = useColorModeValue('white', 'gray.700');
  return (
    <Stack spacing={4} w={'full'} maxW={'md'} bg={stackBg} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
        Ya tienes una código de cuenta?
      </Heading>
      <Text fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
        Ingresa tu código de cuenta para acceder a tus datos.
      </Text>
      <FormControl id="txtAccountId">
        <Input placeholder="" _placeholder={{ color: 'gray.500' }} type="text" />
      </FormControl>
      <Stack spacing={6}>
        <Button
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
        >
          Continuar
        </Button>
      </Stack>
    </Stack>
  );
}
