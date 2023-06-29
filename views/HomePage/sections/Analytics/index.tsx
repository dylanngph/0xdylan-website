import React from "react";
import { getLaunchpadStats } from "@/api/launchpad";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Stack,
  StackDivider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import { useDevice } from "@/hooks/useDevice";

const Analytics = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["launchpadStats"],
    queryFn: getLaunchpadStats,
  });

  const stats = [
    {
      title: "Total Projects",
      value: (data ? data?.totalProjects : 0) + "+",
    },
    {
      title: "Total Users",
      value: (data ? data?.totalUsers : 0) + "+",
    },
    {
      title: "Total Transactions",
      value: (data ? data?.totalSwapTransactions : 0) + "+",
    },
    {
      title: "Fund Raised",
      value: "$50K+",
    },
  ];

  const { isDesktop } = useDevice();
  const { colorMode } = useColorMode();

  return (
    <AnalyticBox
      borderColor={colorMode == "dark" ? "gray.700" : "gray.200"}
      boxShadow="md"
      bg={colorMode == "dark" ? "neutral.500" : "transparent"}
    >
      <Container maxW="container.xl">
        {!isDesktop ? (
          <Grid templateColumns="repeat(2, 1fr)" gap="20px">
            {stats.map((item) => (
              <GridItem key={item.title} textAlign="center">
                <Text fontWeight={700} fontSize={32}>
                  {item.value}
                </Text>
                <Text color="neutral.300">{item.title}</Text>
              </GridItem>
            ))}
          </Grid>
        ) : (
          <Stack
            direction="row"
            gap="24px"
            justify="space-between"
            textAlign="center"
            divider={<StackDivider borderColor="neutral.150" />}
          >
            {stats.map((item) => (
              <Box key={item.title}>
                <Text fontWeight={700} fontSize={32}>
                  {item.value}
                </Text>
                <Text color="neutral.300">{item.title}</Text>
              </Box>
            ))}
          </Stack>
        )}
      </Container>
    </AnalyticBox>
  );
};

const AnalyticBox = styled(Box)`
  border-radius: 16px;
  width: 100%;
  border-width: 1px;
  padding-top: 48px;
  padding-bottom: 48px;
`;

export default Analytics;
