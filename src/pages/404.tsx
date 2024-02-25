import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const NotFoundPage: React.FC = () => {
  return (
    <Box textAlign="center">
      <Image src="/path/to/404-image.png" alt="404 Error" />
      <Text fontSize="xl" fontWeight="bold" mt={4}>
        Error 404: Pagína no encontrada
      </Text>
      <Text mt={2}>Lo sentimos, la página que buscas no existe.</Text>
    </Box>
  );
};

export default NotFoundPage;
