// Thanks https://codesandbox.io/s/chakra-ui-header-sbsh5?fontsize=14&hidenavigation=1&theme=dark
import React, {useState} from "react";
import { Box, Heading, Flex, useColorMode, Switch, FormLabel, IconButton, Link } from "@chakra-ui/core";
import { NavLink } from 'react-router-dom';
import { AiOutlineLinkedin, AiOutlineMedium, AiOutlineGithub } from "react-icons/ai";


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
        alignItems="center"
      >
        <IconButton variant='ghost' marginRight='8px' as={Link} href={'https://www.linkedin.com/in/isamu-isozaki-7698191b0/'} size='lg' icon={AiOutlineLinkedin}/>
        <IconButton variant='ghost' marginRight='8px' as={Link} href={'https://github.com/isamu-isozaki'} size='lg' icon={AiOutlineGithub}/>
        <IconButton variant='ghost' marginRight='8px' as={Link} href={'https://isamu-website.medium.com/'} size='lg' icon={AiOutlineMedium}/>


        <FormLabel htmlFor="theme">Change theme?</FormLabel>
        <form onChange={toggleColorMode}>
          <Switch size="lg"/>
        </form>
      </Box>
      
    </Flex>
  );

};

export default NavBarHeader;
