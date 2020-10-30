// Thanks https://codesandbox.io/s/chakra-ui-header-sbsh5?fontsize=14&hidenavigation=1&theme=dark
import React, {useState} from "react";
import { Box, Heading, Flex, Text, Button, Link, useColorMode, Switch, FormLabel } from "@chakra-ui/core";
import { NavLink } from 'react-router-dom';


const MenuItems = ({ children, to, ...props }) => (
    <NavLink to={to} activeStyle={{fontWeight: 'bold'}} {...props}>
        <Text mt={{ base: 4, md: 0 }} mr={6} display="block" fontSize={'1.1em'}>
            {children}
        </Text>
    </NavLink>
);  

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const NavBarHeader = props => {
  const [show, setShow] = useState(false);
  const { colorMode, toggleColorMode} = useColorMode()
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      {...props}
    >
      <Flex align="center" mr={5}>
        <NavLink exact to="/">
            <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Isamu Isozaki
            </Heading>
        </NavLink>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill={colorMode === "light" ? "black" : "white"}
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="right"
      >
        <MenuItems exact to={'/'}>Home</MenuItems>
        <MenuItems to={'/experiences'}>Experiences</MenuItems>
        <MenuItems to={'/projects'}>Projects</MenuItems>
        
        <FormLabel htmlFor="theme">Change theme?</FormLabel>
        <form onChange={toggleColorMode}>
          <Switch size="lg"/>
        </form>
      </Box>
      
    </Flex>
  );

};

export default NavBarHeader;
