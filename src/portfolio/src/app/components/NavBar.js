// Thanks https://codesandbox.io/s/chakra-ui-header-sbsh5?fontsize=14&hidenavigation=1&theme=dark
import React from 'react';
import { theme, CSSReset, ThemeProvider } from "@chakra-ui/core";
import NavBarHeader from 'app/components/NavBarHeader';


const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};


export default function NavBar() {
  return (
    <ThemeProvider theme={newTheme}>
    <CSSReset />
    <NavBarHeader />
  </ThemeProvider>
  );
}
