"use client";

import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  useColorModeValue,
  Grid,
  GridItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Link,
  Icon,
  Button,
} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

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

  const socials = [
    {
      name: "Github",
      username: "@dylanngph",
      link: "https://github.com/dylanngph",
      icon: AiFillGithub,
    },
    {
      name: "Dylan Twitter",
      username: "@dylanngph",
      link: "https://twitter.com/Dylanngph",
      icon: AiOutlineTwitter,
    },
    {
      name: "BionLabs Twitter",
      username: "@bionLabs",
      link: "https://twitter.com/bionLabs",
      icon: AiOutlineTwitter,
    },
    {
      name: "Facebook",
      username: "@DylanNguyennnnn",
      link: "https://www.facebook.com/DylanNguyennnnn/",
      icon: AiFillFacebook,
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
          <VStack align="start" w="100%" spacing={12}>
            <VStack align="start" spacing={6}>
              <HStack align="start" spacing={4}>
                <Image
                  src="/images/avatar.png"
                  alt="avatar"
                  w="100px"
                  h="100px"
                  borderRadius="full"
                />
                <Box>
                  <Text fontWeight={700} fontSize={{base: 32 , lg: 36}}>
                    Dylan Nguyen
                  </Text>
                  <Text>
                    Web3 Builder (Developer, Designer, Community Builder)
                  </Text>
                </Box>
              </HStack>

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
              <Accordion allowToggle defaultIndex={[0]} w="100%">
                {majors.map((item, index) => (
                  <AccordionItem key={index}>
                    <AccordionButton
                      _expanded={{ bg: "teal", color: "white" }}
                      py={3}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontSize={18} fontWeight={600}>
                          {item.title}
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text py="2" fontSize={14}>
                        {item.description}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </VStack>
            <VStack align='start' spacing={4}>
              <Box borderBottom="3px solid" borderColor="teal" pb={1}>
                <Text fontWeight={700} fontSize={24}>
                  On the web
                </Text>
              </Box>
              <VStack align='start'>
                {socials.map((item, index) => (
                  <Button
                    key={index}
                    variant='link'
                    as="a"
                    target="_blank"
                    href={item.link}
                  >
                    <HStack>
                      <Icon as={item.icon} fontSize={20} />
                      <Text>{item.username}</Text>
                    </HStack>
                  </Button>
                ))}
              </VStack>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align="start" w="100%" spacing={8}>
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
