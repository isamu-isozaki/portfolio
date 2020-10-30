import React from 'react';
import { Flex, Heading, Text, Stack, Box, Link, Button, SimpleGrid } from "@chakra-ui/core";
import { Player } from 'video-react';

function Project({title, vidLink ,link, desc, ...props}) {
    return (
        <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" {...props}>
            <Heading fontSize="xl">{title}</Heading>
            {link && (<Button as={Link} href={link}>Link to project</Button>)}
            {vidLink && (<Button as={Link} href={vidLink}>Link to video</Button>)}
            <Text mt={4}>{desc}</Text>
        </Box>
    );
}

export default function Projects() {
    const projects = [
        {
            title: "tactic-game",
            vidLink: "https://www.youtube.com/watch?v=Q1TVm_V_alk",
            desc: `I made an environment using pymunk and pygame where agents can use machine learning to
            learn basic military strategy.`
        },
        {
            title: "Chesskateers",
            link: "https://chesskateers-app.herokuapp.com/",
            desc: `I worked with my team Drexel's CI course to make an multiplayer chess game with a card game.
            I was responsible for the fullstack. The frontend needs way more work but the multiplayer game is there!`
        },
        {
            title: "baseline-selfplay",
            link: "https://github.com/isamu-isozaki/baseline-selfplay",
            desc: `I modified OpenAI's baselines so they can work with environments with multiple agents. 
            Still a work in progress but does work with my environment.`
        },
        {
            title: "tranquility-utility",
            link: "https://github.com/isamu-isozaki/tranquility-utility",
            desc: `I made an utility for Drexel's CS164's language, tranquility, so that it takes less steps to 
            test a program`
        },
        {
            title: "Frontend-web-development", 
            link: "https://github.com/isamu-isozaki/Frontend-web-development",
            desc: `These are the collections of projects I did during the Frontend Web Development Nanodegree 
            I did at Udacity. Most notably, I made an app that gets neighborhood maps from locations near the user
            and put it on a google map using Foursquare and Google map app and made a game using canvas.            
            `,        
        },
        {
            title: "toxic-joke-generator",
            link: "https://github.com/isamu-isozaki/toxic-joke-generator",
            desc: `I finetuned gpt-2 with an attempt to make a joke generator using reddit data. However, the jokes
            turned out to be a bit toxic so I'm trying to fix that.`
        },
    ]
    return (
        <Flex>
            <Flex alignItems="center" flexDirection="column">
                <Text fontSize="2em" marginBottom={10}>Projects</Text>
                <SimpleGrid  columns={2} spacing={20} marginRight={10} marginLeft={10}>
                    {projects.map(
                        project => (<Project {...project} />)
                    )}
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}