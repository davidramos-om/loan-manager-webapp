import { Box, useColorModeValue } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  href: string;
}

export const NavLink = (props: Props) => {
  const { children } = props;
  const bg = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg,
      }}
      href={props.href}
    >
      {children}
    </Box>
  );
};
