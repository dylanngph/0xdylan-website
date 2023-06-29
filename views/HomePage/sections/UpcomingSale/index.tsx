"use client";

import React from "react";
import { Text, Box, VStack, Grid, GridItem } from "@chakra-ui/react";
import useFetchSales from "./useFetchSales";
import LaunchpadCard from "@/components/Card/Launchpad/LaunchpadCard";

const UpcomingSale = () => {
  const { launchpads } = useFetchSales();

  return (
    <VStack w="100%" align="start" spacing={5} py="4rem">
      <VStack align="start">
        <Text fontSize={{ lg: 36 }} fontWeight={700}>
          Upcoming Sale
        </Text>
        <Text color="neutral.300">
          Explore all the top projects being launched on Bion Launchpad
        </Text>
      </VStack>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="24px"
        justifyContent="space-between"
        w="100%"
      >
        {launchpads?.data.map((item: any, index: any) => (
          <GridItem key={index}>
            <LaunchpadCard launchpad={item} />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default UpcomingSale;
