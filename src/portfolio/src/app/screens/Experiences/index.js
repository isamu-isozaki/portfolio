import React from 'react';
import { Flex, Heading, Text, SimpleGrid, Box, Link, Button, List, ListItem, IconButton } from "@chakra-ui/core";

function Experience({title, company, descs, ...props}) {
    return (
        <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" {...props}>
            <Flex direction="row" alignContent='flex-end' justifyContent='left'>
                <Heading alignContent='flex-end' fontSize="xl" marginRight='10px'>{title}</Heading>
                <Text alignContent='flex-end' marginRight='5px'>{company}</Text>
            </Flex>
            <List>
                {descs.map(
                    (desc, idx) => (<ListItem key={idx}>- {desc}</ListItem>)
                )}
            </List>
        </Box>
    );
}

export default function Experiences() {
    const experiences = [
        {
            title: "Machine Learning Engineer",
            company: "Glodon USA",
            descs: [
                "Improved inpainting model to generate candidate road networks and building placement from pix2pix GANs to Deepfillv2 and finally state-of-the-art Diffusion Models with Transformers from Open AI’s Glide Model for a 3x reduction in l2 loss.",
                "Implemented a graph to room layout model by reading research papers on the House GAN model and modified it so furniture is generated within the rooms for a 4x reduction in l1 loss compared to GANs."
            ]
        },
        {
            title: "Backend/Machine Learning Developer",
            company: "Moberg Analytics",
            descs: [
                "Made Sparse Models for Unsupervised Explainable AI for Doctors to understand how the AIs are doing predictions.",
                "Set up data pipeline and IAM server using Flask, Kubernetes, and MySQL to distribute cleaned data in a fast and secure manner.",
                "Fixed vulnerability in transmitting data in the company by setting up https.",
                "Created models to detect medical emergencies at 90% accuracy as well as a seizure detector with 87% accuracy."
            ]
        },
        {
            title: "Data Scientist",
            company: "Drexel University",
            descs: [
                "Cleaned and analyzed covid testing data to identify risk factors of covid and constructed a model to predict covid at 80% accuracy."
            ]
        },
        {
            title: "Backend/Machine Learning Developer",
            company: "Kiara",
            descs: [
                "Made spam text classifier at 97% accuracy and deployed using google cloud function and cloud run as an API with Flask.",
                "Using Gitlab CI, sped up the deployment of the team by 75%."
            ]
        },
        {
            title: "Fullstack Developer",
            company: "Kiara",
            descs: [
                "Added method for translating mails sent to our smtp servers using google translate api, milters, Node Js with MongoDB for our customers in the import export industry.",
                "Created React Js frontend for mail sending capabilities(one to many, one to one) for users to handle mail destinations.",
            ],
        },
        {
            title: "Frontend Developer",
            company: "Wolf Financial",
            descs: [
                "Added login functionality with animation using Firebase and React Native for user's first look at the app.",
                "Setup Dashboard stock graphs and integrated with backend data using React Native for interactive data analysis.",
            ],
        },
        {
            title: "AI Intern",
            company: "Team AI",
            descs: [
                "Finetuned GPT-2 from Open AI to make Joke Generator for a technical demonstration of the company.",
                "Using Progressive Gan, made a flower generator for a technical demonstration of the company.",
                "Adapted face2face to make a basic Deepfake for CEO for a potential future zoom avatar.",
            ],
        },
    ]
    return (
        <Flex  id="experiences" alignItems="center" width="100%"  flexDirection="column" justifyContent="center">
            <Flex alignItems="center" flexDirection="column" width="60%">
                <Text fontSize="2em" marginBottom={5}>Experiences</Text>
                <SimpleGrid columns={1} spacing={5}>
                        {experiences.map(
                            (experience, idx) => (<Experience key={idx} {...experience} />)
                        )}
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}