"use client";

import React from "react";
import { Box, Text, HStack, VStack, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";

interface TrendingCardProps {
  title?: string;
  shortDescription?: string;
  href?: string;
  image?: string;
  logo?: string;
  status?: string;
}

const TrendingCard = ({
  title = "Upcoming Event",
  shortDescription = "Renegades vs Chiefs - ESL ProLeague Season 16 - Playoffs",
  href,
  image = "/images/sample/projects/banner01.png",
  logo = "/images/sample/projects/logo01.svg",
  status = "Up Coming",
}: TrendingCardProps) => {
  return (
    <Wrapper
      bg={`url(${image})`}
      w={{ base: "100%", lg: "640px" }}
      h={{ base: "360px", lg: "360px" }}
      color='neutral.0'
    >
      <DetailBox maxW={{base: '100%' , lg:"450px"}} ml={{ base: 6, lg: 10 }} mb={{ base: 6, lg: 10 }}>
        <VStack align="start" spacing={6}>
          <VStack align="start">
            <Box
              bg="primary.500"
              color="neutral.0"
              px={2}
              py={1}
              borderRadius={8}
              fontWeight={500}
              fontSize={12}
            >
              {status}
            </Box>
            <Text fontSize={{ base: 20, lg: 28 }} fontWeight={600}>
              {shortDescription}
            </Text>
            <HStack>
              <Box>
                <Image alt="logo" width={24} height={24} src={logo} />
              </Box>
              <Text fontSize={{ base: 16, lg: 18 }}>{title}</Text>
            </HStack>
          </VStack>

          <Button variant="primary" size={{ base: "sm", lg: "md" }}>
            View Details
          </Button>
        </VStack>
      </DetailBox>
      <BottomOverlay />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  border-radius: 32px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const BottomOverlay = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  border-radius: 32px;
  z-index: 1;
`;

const DetailBox = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export default TrendingCard;
