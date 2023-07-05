"use client";

import React, { Fragment } from "react";
import { Container, Box, Text, Grid, GridItem } from "@chakra-ui/react";
import DonatePanel from "./DonatePanel";

const DonateMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box py={{ base: "4rem", lg: "8rem" }} minH='90vh'>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={12}
        >
          <GridItem colSpan={{ base: "auto", lg: 2 }}>{children}</GridItem>
          <GridItem colSpan={{ base: "auto", lg: 1 }}>
            <DonatePanel/>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default DonateMainLayout;
