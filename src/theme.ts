import { extendTheme, theme as chakraTheme, type ThemeConfig } from '@chakra-ui/react';

const { Button } = chakraTheme.components;

const confi: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'baby',
};

const theme = extendTheme({
  config: confi,

  components: {
    Button,
  },
});

export default theme;
