import React from 'react';
import { Flex, Heading, Text, SimpleGrid, Box, Link, Button, List, ListItem } from "@chakra-ui/core";

function Experience({title, position, link, time, descs, ...props}) {
    return (
        <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" {...props}>
            <Heading fontSize="xl">{title}</Heading>
            {link && (<Button as={Link} href={link}>Link to company</Button>)}
            <Text>position: {position}</Text>
            <Text>{time}</Text>
            <List>
                {descs.map(
                    desc => (<ListItem>{desc}</ListItem>)
                )}
            </List>
        </Box>
    );
}

export default function Experiences() {
    const experiences = [
        {
            title: "Kiara",
            position: "Fullstack Developer",
            link: "https://www.kiara-app.com/",
            time: "Jul 2020 - Present",
            descs: [
                "Setup mail server on Aws so that mail can be recieved",
                "Processed and translated mails sent to mail server using milters and Node Js with MongoDB",
                "Used React Js for the website and firebase for authentication so that users can register",
            ],
        },
        {
            title: "Wolf Financial",
            position: "Frontend Developer",
            link: "https://wolf.financial/",
            time: "Mar 2020 - Jun 2020",
            descs: [
                "Setup Dashboard and integrated with backend using React Native so that users can get a basic overview of what Wolf is about",
                "Setup Login screen with custom animations using React Native",
            ],
        },
        {
            title: "Team AI",
            position: "AI Intern",
            link: "https://www.team-ai.com/",
            time: "Jun 2019 - Sep 2019",
            descs: [
                "Finetuned GPT-2 from Open AI to make Joke Generator for a technical demonstration of the company",
                "Adapted face2face to make a basic Deepfake for CEO for a potential future zoom avatar",
            ],
        },
    ]
    return (
        <Flex>
            <Flex alignItems="center" flexDirection="column" width="100%">
                <Text fontSize="2em" marginBottom={10}>Experiences</Text>
                <SimpleGrid columns={2} spacing={20} marginRight={10} marginLeft={10}>
                    {experiences.map(
                        experience => (<Experience {...experience} />)
                    )}
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}