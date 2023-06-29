"use client";

import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Grid,
  GridItem,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import TrendingCard from "./components/Card/TrendingCard";
import Analytics from "../Analytics";
import styled from "@emotion/styled";
import Image from "next/image";

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Box w="100%">
      <Stack
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
        spacing={4}
        align="start"
      >
        <Box order={{ base: 2, lg: 1 }}>
          <VStack align="start" maxW="600px" spacing={6}>
            <VStack>
              <Text fontSize={{ base: 32, lg: 42 }} fontWeight={700}>
                Defining the Future of Web3 Together
              </Text>
              <Text fontSize={{ base: 16, lg: 20 }} color="neutral.300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </VStack>

            <HStack mb={5}>
              <Button variant="primary" size='lg'>Create BUILDs</Button>
              <Button variant="outline" size='lg' color='primary.400' borderColor='primary.400'>Learn more</Button>
            </HStack>
            {/* <Analytics /> */}
          </VStack>
        </Box>
        <Box w={{ base: "100%", lg: "auto" }} order={{ base: 1, lg: 2 }}>
          <Image
            src={
              colorMode == "dark"
                ? "/images/pages/home/illus-light.svg"
                : "/images/pages/home/illus.svg"
            }
            alt="illus"
            width={700}
            height={400}
          />
        </Box>
      </Stack>
    </Box>
  );
};

const HeroIllus = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  max-width: 800px;
  width: 100%;
`;

export default Hero;
