"use client";

import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  useColorModeValue,
  Container,
  Stack,
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
  CardFooter,
  Button,
  CardHeader,
} from "@chakra-ui/react";

const About = () => {
  const bio = [
    {
      time: "1997",
      description: "Born in Ho Chi Minh City, Vietnam",
    },
    {
      time: "2017",
      description:
        "Project Lead of ThienHoangPhat corp, my job is building and maintaining an application called VATA and a manangement system for documentations",
    },
    {
      time: "Late 2017",
      description: "Blockchain research and study.",
    },
    {
      time: "2020",
      description:
        "Graduate University of Information and Technology, Vietnam National University Ho Chi Minh City with a Bachelor of Engineering (B.E.) focused in Networks and Communications.",
    },
    {
      time: "2020",
      description:
        "Start as Frontend Developer at FPT Software HCMC, Developed a Web Application called Ai Covid during the covid pandemic used Django models for machine learning and Artificial intelligence.",
    },
    {
      time: "Late 2020",
      description:
        "Lead Frontend Developer at JadeLabs with responsibility e for developing, managing and distributing frontend work of decentralized applications related to layer 1 blockchains such as Ethereum, KardiaChain, BNB Smart Chain, Polygon, etc.",
    },
    {
      time: "2021 - Present",
      description:
        "BionLabs's Founder, a company that provides blockchain solutions for businesses and organizations. I am responsible for developing, managing and distributing frontend work of decentralized applications related to layer 1 blockchains such as Ethereum, KardiaChain, BNB Smart Chain, Polygon, etc. I am also responsible for the company's business development and marketing activities.",
    },
  ];

  const bioDescriptionColor = useColorModeValue("gray.700", "gray.300");
  const cardBg = useColorModeValue("blackAlpha.50", "whiteAlpha.50");

  const majors = [
    {
      title: "Frontend Development",
      description:
        "Proficient Frontend Developer with expertise in web3 technologies. Skilled in integrating blockchain functionalities and Solidity smart contracts into web applications. Passionate about crafting seamless user experiences and staying up-to-date with the latest advancements in web3 development.",
    },
    {
      title: "Web Application Development",
      description:
        "Experienced Web Application Developer specializing in the React stack. Proficient in developing robust and responsive web applications using React.js, Redux, and other related technologies.",
    },
    {
      title: "Blockchain Development & Research",
      description:
        "Knowledgeable Blockchain Developer and Researcher with expertise in EVM (Ethereum Virtual Machine) compatible blockchains. Skilled in designing and developing decentralized applications (DApps) on blockchain platforms such as Ethereum, Binance Smart Chain, and others.",
    },
  ];

  return (
    <Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap="60px"
      >
        <GridItem>
          <VStack align="start" w="100%" spacing={6}>
            <VStack align="start">
              <Text fontWeight={700} fontSize={36}>
                About me
              </Text>
              <Text color={useColorModeValue("gray.700", "gray.300")}>
                I possess extensive expertise as a seasoned Builder, capable of
                seamlessly integrating my skills across multiple domains within
                a company. My proficiency spans across software development,
                marketing, product design, and building community, enabling me
                to contribute comprehensively to various aspects of the
                organization. Additionally, I have a strong command over diverse
                web frameworks and blockchain industry, empowering me to tackle
                complex challenges efficiently. Whether I&apos;m working
                independently on projects or collaborating within a dynamic
                team, I consistently demonstrate effective self-management and
                foster a productive working environment.
              </Text>
            </VStack>
            <VStack align="start" spacing={6}>
              <Text fontWeight={700} fontSize={36}>
                My Major
              </Text>
              <VStack spacing={4}>
                {majors.map((item, index) => (
                  <Card
                    key={index}
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    bg={cardBg}
                  >
                    <CardHeader>
                      <Heading size="md">0{index + 1}</Heading>
                    </CardHeader>
                    <Stack>
                      <CardBody>
                        <Heading size="md">{item.title}</Heading>
                        <Text py="2" fontSize={14}>{item.description}</Text>
                      </CardBody>
                    </Stack>
                  </Card>
                ))}
              </VStack>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align="start" w="100%">
            <Text fontWeight={700} fontSize={36}>
              Bio
            </Text>
            <VStack w="100%" align="start" spacing={4}>
              {bio.map((item, index) => (
                <Grid
                  key={index}
                  alignItems="baseline"
                  w="100%"
                  templateColumns={{
                    base: "repeat(4, 1fr)",
                  }}
                >
                  <GridItem colSpan={1}>
                    <Text fontWeight={700}>{item.time}</Text>
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Text color={bioDescriptionColor}>{item.description}</Text>
                  </GridItem>
                </Grid>
              ))}
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
