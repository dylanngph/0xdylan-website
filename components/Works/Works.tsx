"use client";

import { getWorks } from "@/api/works";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  VStack,
  Card,
  Stack,
  Heading,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import NextLink from "next/link";
import React from "react";

export const LayoutWorks = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack w="100%" align="start" spacing={12}>
          {/* <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight={700}>
            Works
          </Text> */}
          <Box>{children}</Box>
        </VStack>
      </Container>
    </Box>
  );
};

export const Works = () => {
  const { data: works, isLoading } = useQuery({
    queryKey: ["works"],
    queryFn: () => getWorks(),
  });

  return (
    <VStack w="100%" align="start" spacing={12}>
      <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight={700}>
        Works
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
        rowGap={12}
      >
        {isLoading ? (
          <WorkLoadingCard />
        ) : works ? (
          works.data.map((item: any) => (
            <GridItem key={item.id}>
              <WorkCard
                title={item.attributes.title}
                shortDescription={item.attributes.shortDescription}
                image={item.attributes.featuredImage.data.attributes.url}
                link={item.attributes.link}
              />
            </GridItem>
          ))
        ) : !works ? null : (
          <WorkLoadingCard />
        )}
      </Grid>
    </VStack>
  );
};

const WorkCard = ({
  title,
  shortDescription,
  image = "https://placehold.co/400x200",
  link,
}: {
  title: string;
  shortDescription: string;
  image: string;
  link: string;
}) => {
  return (
    <NextLink href={link ? link : "#"} target="_blank">
      <Card
        maxW="md"
        boxShadow="none"
        cursor="pointer"
        borderRadius="8px"
        bg="transparent"
      >
        <Box
          w="100%"
          h="200px"
          bgImage={`url(${image})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          objectFit="cover"
          borderRadius="8px"
        />
        <Stack spacing="3" py={6}>
          <Heading size="md">{title}</Heading>
          <Text>{shortDescription}</Text>
        </Stack>
      </Card>
    </NextLink>
  );
};

const WorkLoadingCard = () => {
  return (
    <Card maxW="md" bg="transparent" boxShadow="none" cursor="pointer">
      <Skeleton w="300px" h="200px" borderRadius="12px" />
      <Stack mt="6" spacing="3">
        <Skeleton w="300px" h="24px" />
        <Skeleton w="300px" h="72px" />
      </Stack>
    </Card>
  );
};
