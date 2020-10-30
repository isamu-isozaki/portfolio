import React from 'react';
import { Flex, Text, Button, ButtonGroup, Link } from "@chakra-ui/core";
import { useHistory } from 'react-router-dom';
import pdf from 'app/assets/resume.pdf';
export default function Home() {
    const history = useHistory();
    return (
        <Flex height="80%">
            <Flex 
                justifyContent="center" 
                alignItems="center"
                width="100%"
                height="100%"
                flexDirection="column">
                <Text fontSize="2em">Hi, I'm Isamu.</Text>
                <Text fontSize="2em">I like working on challenging projects.</Text>
                <ButtonGroup spacing={4} marginTop={5}>
                    <Button size="lg" onClick={() => {
                        history.push('/experiences')
                    }}>
                        See Experiences
                    </Button>
                    <Button size="lg" onClick={() => {
                        history.push('/projects')
                    }}>
                        See Projects
                    </Button>
                    <Button as={Link} href={pdf} size="lg">
                        See Resume
                    </Button>
                </ButtonGroup>
            </Flex>
        </Flex>
    )
}