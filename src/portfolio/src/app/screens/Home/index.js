import React from 'react';
import { Flex, Text, Button, ButtonGroup, Link } from "@chakra-ui/core";
import pdf from 'app/assets/resume.pdf';
export default function Home() {
    return (
        <Flex height="100%">
            <Flex 
                justifyContent="center" 
                alignItems="center"
                width="100%"
                height="100%"
                flexDirection="column">
                <Text fontSize="2em">Hi, I'm Isamu.</Text>
                <Text fontSize="2em">I like working on challenging projects.</Text>
                <ButtonGroup spacing={4} marginTop={5}>
                    <Button as={Link} href={pdf} size="lg">
                        Resume
                    </Button>
                    {/* <Button size="lg" onClick={() => {
                        const projects = document.getElementById("projects");
                        projects.scrollIntoView({behavior: "smooth", inline: "nearest"});
                    }}>
                        Work
                    </Button> */}
                    <Button size="lg" onClick={() => {
                        const projects = document.getElementById("projects");
                        projects.scrollIntoView({behavior: "smooth", inline: "nearest"});
                    }}>
                        Projects
                    </Button>
                    <Button size="lg" as={Link} href="mailto:isamu.website@gmail.com">
                        Contact
                    </Button>
                </ButtonGroup>
            </Flex>
        </Flex>
    )
}