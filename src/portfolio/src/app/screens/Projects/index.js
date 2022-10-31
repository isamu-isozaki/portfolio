import React from 'react';
import { Flex, Heading, Text, Stack, Box, Link, Button, SimpleGrid, IconButton, List, ListItem} from "@chakra-ui/core";
import { AiOutlineYoutube, AiOutlineMedium, AiOutlineGithub } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
function Project({title, vidLink, githubLink, mediumLink, websiteLink, descs, ...props}) {
    return (
        <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" {...props}>
            <Flex direction="row" alignContent='center' justifyContent='left'>
                <Heading alignContent='center' fontSize="xl" marginRight='10px' marginTop='7px'>{title}</Heading>
                {githubLink && (<IconButton variant='ghost' marginRight='5px' as={Link} href={githubLink} size='md' icon={AiOutlineGithub}/>)}
                {mediumLink && (<IconButton variant='ghost' marginRight='5px' as={Link} href={mediumLink} size='md' icon={AiOutlineMedium}/>)}
                {vidLink && (<IconButton variant='ghost' marginRight='5px' as={Link} href={vidLink} size='md' icon={AiOutlineYoutube}/>)}
                {websiteLink && (<IconButton variant='ghost' marginRight='5px' as={Link} href={websiteLink} size='md' icon={FaGlobe}/>)}
            </Flex>
            <List>
                {descs.map(
                    (desc, idx) => (<ListItem key={idx}>- {desc}</ListItem>)
                )}
            </List>
        </Box>
    );
}

export default function Projects() {
    const projects = [
        {
            title: "Room Mate's Dog Generator",
            githubLink: "https://github.com/isamu-isozaki/diffusers",
            mediumLink: "https://isamu-website.medium.com/generate-my-favorite-dog-just-using-6gb-with-stable-diffusion-c0ff80aaa059",
            descs: [
                "Independently generated photo-realistic roommate’s dog pictures from 6 images by improving from Open AI’s Glide model to few-shot textual inversion for a 16% reduction in l2 loss.",
                "Adapted textual inversion model so that training is possible with 30%of GPU RAM using gradient checkpointing, mixed precision, and attention slicing."
            ]
        },
        {
            title: "Bipedal Walking Robot",
            githubLink: "https://github.com/isamu-isozaki/biped-robot",
            vidLink: "https://www.youtube.com/watch?v=XUQIfpQwdRo&ab_channel=IsamuIsozaki",
            mediumLink: "https://isamu-website.medium.com/robot-making-adventures-d44fd5c5ed89",
            descs: [
                "With a partner created a 12-dof bipedal walking robot by using Autodesk Inventor to create and export the CAD to MATLAB to simulate the walking motion using the inverse pendulum.",
                "Modified Inverse kinematics algorithm so that a valid walking pattern emerges 80% faster.",
                "Optimized code for Arduino by casting data to 16 bits and utilizing periodic patterns in walking for a 1/3 memory reduction.",
                "3d printed and assembled robot."
            ]
        },
        {
            title: "Room Mates' Cost Splitter using AI Receipt Scanner",
            githubLink: 'https://github.com/isamu-isozaki/recedo',
            websiteLink: 'https://recedo.isamuisozaki.com/',
            descs: [
                "Made a recipt scanner for itemizing receipt items using pytesseract, OpenCV and paddleocr.",
                "Created a price splitter web app using Node Js, Mongoose on the backend and Redux with React Js for the frontend.",
                "Used firebase for account creation and securely transmitting transactions",
                "Deployed to Ubuntu Server with DNS records from IONOS, port mapping with nginx and pm2 to handle runs.",
                "Used pnpm to save 50% of harddisk space by reusing duplicate packages across projects."
            ]
        },
        {
            title: 'Portfolio',
            githubLink: 'https://github.com/isamu-isozaki/portfolio',
            websiteLink: 'https://isamuisozaki.com/',
            descs: [
                "Deployed to Ubuntu Server with DNS records from IONOS, port mapping with nginx and pm2 to handle runs.",
                "Used pnpm to save 50% of harddisk space by reusing duplicate packages across projects."
            ]
        },
        {   
            title: "Sparse Library",
            githubLink: "https://github.com/isamu-isozaki/sparse_mnist",
            descs: [
                "Contributed an Open Source Library for Sparse Models as part of the movement for explainable AI introduced to me by Dr.Edward Kim."
            ]
        },
        {   
            title: "War Tactics AI",
            githubLink: "https://github.com/isamu-isozaki/moba-openai-rl",
            mediumLink: "https://medium.com/analytics-vidhya/making-a-self-play-environment-for-openai-gym-23486bc44d6f",
            vidLink: "https://www.youtube.com/watch?v=Q1TVm_V_alk",
            descs: [
                "Created a competitive reinforcement learning environment with Gunma University and trained agents with Open AI baselines/",
                "Used docker and MySQL to create servers for continual learning to speed up training by 93%.",
                "Wrote Medium article series on how Open AI's baselines were modified along with my adeventures for 10k views."
            ]
        },
        {
            title: "Chesskateers",
            githubLink: "https://github.com/isamu-isozaki/Chesskateers",
            websiteLink: "https://chesskateers-app.herokuapp.com/",
            descs: [
                "For CI class, made a multiplayer chess game with card play mechanics using node js, sockets, react js, and unity.",
                "Used firebase for users to sign up using emails and notify each other for a match."
            ]
        },
        {
            title: "Hidden Nets Presentation",
            githubLink: "https://github.com/isamu-isozaki/hidden-networks",
            descs: [
                "Read the research paper, 'What's Hidden in a Randomly Weighted Neural Network?' and found a subnet with 10% of the parameters of a random network that gives 95% accuracy for CIFAR 10 task.",
                "Presented the results and the techniques of the paper to my ML Reading Group by Professor Dr.Edward Kim."
            ]
        },
        {
            title: "Tranquility-utility",
            githubLink: "https://github.com/isamu-isozaki/tranquility-utility",
            descs: [
                "For the class cs164, made execution of Professor Brian Stuart's tranquility language easier by allowing execution without recompiling each time."
            ]
        },
        {
            title: "Joke Generator",
            githubLink: "https://github.com/isamu-isozaki/toxic-joke-generator",
            mediumLink: "https://medium.com/analytics-vidhya/understanding-the-gpt-2-source-code-part-1-4481328ee10b",
            descs: [
                "Understood the GPT2 Source Code and Made a Medium Series about the source code with 20k views.",
                "Made a Joke Generator by finetuning 117M GPT-2 by Open AI with jokes webscraped online.",
                "Sample jokes include 'Why are cemeteries surrounded by walls?....Because people are dying to get in there.'"
            ]
        },
        {
            title: "Emotional Detecction Using AAMs",
            githubLink: "https://github.com/isamu-isozaki/Mastering-OpenCV-with-Practical-Computer-Vision-Projects",
            descs: [
                "Partnered with Gunma University for the JST grant and used a technique called Active Appearance Modeling which uses PCA for detecting expressions in order to detect emotion."
            ]
        },
        {
            title: "Frontend-web-development Udacity Nanodegree Projects", 
            githubLink: "https://github.com/isamu-isozaki/Frontend-web-development",
            descs: [
                "Made an knockout-js app that uses user's GPS location and Foursquares API to recommend restaurants in Google Map.",
                "Optimized website by more than 90% using gulp and by removing variable declarations within loops.",
                "Made a game using Js Canvas utilizing Js Prototypes."
            ],        
        },
    ]
    return (
        <Flex  id="projects" alignItems="center" width="100%"  flexDirection="column" justifyContent="center">
            <Flex alignItems="center" flexDirection="column" width="60%">
                <Text fontSize="2em" marginBottom={5}>Projects</Text>
                <SimpleGrid  columns={1} spacing={5}>
                    {projects.map(
                        (project, idx) => (<Project {...project} key={idx} />)
                    )}
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}