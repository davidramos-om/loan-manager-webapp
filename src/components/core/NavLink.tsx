import { Box, useColorModeValue } from '@chakra-ui/react';
import RouterLink from 'src/routes/router-link';

interface Props {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export const NavLink = (props: Props) => {
  const { children } = props;
  const bg = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as={RouterLink}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg,
      }}
      href={props.href}
      onClick={props.onClick}
    >
      {children}
    </Box>
  );
};
