import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon, StarIcon } from '@chakra-ui/icons';
import { NavLink } from '../core/NavLink';
import RouterLink from 'src/routes/router-link';
import paths from 'src/routes/path';

const Links = [
  {
    label: 'Home',
    href: paths.HOME,
  },
  {
    label: 'New Account',
    href: paths.NEW_ACCOUNT,
  },
  {
    label: 'Add Account',
    href: paths.ADD_ACCOUNT,
  },
  {
    label: 'Dashboard',
    href: paths.DASHBOARD,
  },
];

type Props = {
  children: React.ReactNode;
};

export default function AppLayout(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const boxBg = useColorModeValue('gray.100', 'gray.900');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={boxBg} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <RouterLink href={paths.HOME}>
              <StarIcon />
            </RouterLink>

            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={onClose}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>

            <Button variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4} leftIcon={<AddIcon />}>
              Action
            </Button>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={onClose}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{props.children}</Box>
    </>
  );
}
