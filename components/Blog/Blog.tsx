"use client";

import { getPosts, getWorks } from "@/api/works";
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
import React from "react";
import Link from "next/link";

export const LayoutBlog = ({ children }: { children: React.ReactNode }) => {

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack w="100%" align="start" spacing={12}>
          {/* <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight={700}>
            Posts
          </Text> */}
          <Box>{children}</Box>
        </VStack>
      </Container>
    </Box>
  );
};

export const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <VStack w="100%" align="start" spacing={12}>
      <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight={700}>
        Posts
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
          <PostLoadingCard />
        ) : posts ? (
          posts.data.map((item: any) => (
            <GridItem key={item.id}>
              <PostCard
                id={item.id}
                title={item.attributes.title}
                shortDescription={item.attributes.shortDescription}
                image={item.attributes.featuredImage.data.attributes.url}
                updatedAt={
                  item
                    ? new Date(item.attributes.updatedAt).toLocaleString()
                    : undefined
                }
              />
            </GridItem>
          ))
        ) : !posts ? null : (
          <PostLoadingCard />
        )}
      </Grid>
    </VStack>
  );
};

const PostCard = ({
  id,
  title,
  shortDescription,
  image = "https://placehold.co/400x200",
  updatedAt,
}: {
  id: string | number;
  title: string;
  shortDescription: string;
  image: string;
  updatedAt?: string;
}) => {
  return (
    <Link href={id ? `blog/${id}` : "#"} legacyBehavior>
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
          {updatedAt && (
            <Text fontSize={14} color="neutral.300">
              Update: {updatedAt}
            </Text>
          )}
          <Heading size="md">{title}</Heading>
          <Text>{shortDescription}</Text>
        </Stack>
      </Card>
    </Link>
  );
};

const PostLoadingCard = () => {
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
