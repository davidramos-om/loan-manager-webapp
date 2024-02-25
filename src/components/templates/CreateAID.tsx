import { Button, FormControl, Heading, Input, Stack, Text, Divider, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

import paths from 'src/routes/path';
import RouterLink from 'src/routes/router-link';
import { newId } from 'src/utils/string/ids';

export function CreateAnonymousAccountForm() {
  const stackBg = useColorModeValue('white', 'gray.700');
  const accountLabelColor = useColorModeValue('gray.800', 'gray.400');
  const textColor1 = useColorModeValue('gray.800', 'gray.400');

  const [aid, setAid] = useState('');

  const generateAID = () => {
    setAid(newId());
  };

  return (
    <Stack spacing={4} w={'full'} maxW={'md'} bg={stackBg} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
        Crear cuenta anonima
      </Heading>
      <Text fontSize={{ base: 'sm', sm: 'md' }} color={textColor1}>
        Esta cuenta es unica y no se puede recuperar, no la pierdas o perderas acceso a tus datos relacionados.
      </Text>
      <Stack spacing={6}>
        {!aid && (
          <Button colorScheme="blue" onClick={generateAID}>
            Generar cuenta
          </Button>
        )}
        {aid && (
          <>
            <Divider />
            <Text fontSize={{ base: 'sm', sm: 'md' }} color={accountLabelColor}>
              Tu cuenta anonima es:
            </Text>
            <FormControl id="account">
              <Input readOnly value={aid} placeholder="Cuenta anonima" _placeholder={{ color: 'gray.500' }} type="text" />
            </FormControl>
            <RouterLink href={`${paths.DASHBOARD}/?aid=${aid}`}>
              <Button colorScheme="green">Continuar</Button>
            </RouterLink>
          </>
        )}
      </Stack>
    </Stack>
  );
}
