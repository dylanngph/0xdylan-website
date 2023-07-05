"use client";

import React from "react";
import {
  Text,
  VStack,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const About = () => {
  const details = [
    {
      title: "Building a Strong Community",
      description:
        "At BUIDL Station, our vision is to foster a vibrant and inclusive community of blockchain enthusiasts, developers, and entrepreneurs. By supporting us, you actively participate in building this community from the ground up. Together, we can share knowledge, collaborate on projects, and inspire each other to explore new frontiers. Your donation helps us organize events, workshops, and meetups that connect individuals passionate about blockchain technology. Find out more about BUIDL Station",
    },
    {
      title: "Empowering Web3 Development",
      description:
        "By donating, you directly contribute to the advancement of web3 technologies. As a web3 developer, I am committed to pushing the boundaries of what&apos;s possible and delivering innovative solutions. Your support enables me to invest in research, development, and infrastructure, helping me create tools, applications, and protocols that bring real value to the blockchain ecosystem.",
    },
    {
      title: "Airdrop Benefits and Token Listing",
      description:
        "As a token of appreciation for your generosity, I will airdrop my personal tokens (DLT) to all donors. Once listed on the Binance Smart Chain (BSC), these tokens will hold inherent value within the web3 ecosystem. This unique opportunity allows you to become an early holder of a token associated with BionLabs and participate in its growth and success. Your donation not only supports our mission but also provides you with potential long-term benefits.",
    },
    {
      title: "Liquidity Pool Contribution",
      description:
        "Transparency and community-driven initiatives are at the core of BionLabs. We are committed to utilizing a significant portion (60%) of the donated funds to establish a liquidity pool (LP). By doing so, we ensure that our token&lsquo;s market liquidity remains healthy and stable. Your contribution directly fuels this liquidity pool, facilitating trading and ensuring the viability of our ecosystem.",
    },
  ];

  return (
    <Box>
      <VStack align="start">
        <Text fontWeight={700} fontSize={38}>
          Why Donate?
        </Text>
        <Text>
          Welcome to my portforlio, the hub of innovation and community-driven
          development in the web3 space. As a passionate web3 developer, I am
          dedicated to creating cutting-edge solutions and building a vibrant
          community of like-minded individuals. By donating to support me and my
          company, BionLabs, you become an integral part of our journey towards
          revolutionizing the decentralized world.
        </Text>
      </VStack>
      <VStack align="start" mt={8} spacing={6}>
        <Accordion allowToggle defaultIndex={[0]} w="100%">
          {details.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionButton
                _expanded={{ bg: "teal", color: "white" }}
                py={3}
              >
                <Box flex="1" textAlign="left">
                  <Text fontSize={20} fontWeight={600}>
                    {item.title}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text py="2" fontSize={16}>
                  {item.description}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Box>
  );
};

export default About;
