import React from "react";
import {
  Box,
  HStack,
  Image,
  VStack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Progress,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { nFormatter } from "@/utils/format";
import Link from "next/link";
import { useLaunchpad } from "@/hooks/useLaunchpad";

interface LaunchpadCardProps {
  launchpad: any;
}
const LaunchpadCard = ({ launchpad }: LaunchpadCardProps) => {
  const { currentCap, progress, unit, endTimeFormatted } =
    useLaunchpad(launchpad);
  const { colorMode } = useColorMode();

  return (
    <Wrapper
      border="1px solid"
      borderColor={colorMode == "dark" ? "gray.700" : "gray.200"}
      bg={colorMode == "dark" ? "neutral.500" : "neutral.0"}
      boxShadow="md"
    >
      <Image
        src={launchpad.banner}
        alt={launchpad.title}
        borderTopLeftRadius="15px"
        borderTopRightRadius="15px"
        objectFit="cover"
        w="100%"
        h={145}
      />
      <Box
        mt="-42px"
        ml="24px"
        borderRadius="8px"
        bg="neutral.500"
        border="2px solid"
        borderColor="neutral.400"
        width="fit-content"
      >
        <Image
          src={launchpad.logo}
          alt={launchpad.title}
          w="80px"
          h="80px"
          borderRadius="7px"
        />
      </Box>
      <VStack p="10px 24px 24px 24px" align="start" gap="12px" w="100%">
        <HStack justify="space-between" spacing={4} w="100%" align="center">
          <VStack align="start" spacing={1}>
            <Text fontSize={18} fontWeight={700}>
              {launchpad.title}
            </Text>
            <Text fontSize={14} color="primary.500" fontWeight={600}>
              ${launchpad.tokenMetadata.symbol}
            </Text>
          </VStack>
          <VStack align="end" spacing={1}>
            <Text fontSize={14} color="neutral.300" fontWeight={600}>
              Raised with
            </Text>
            <Image
              src={`/icons/coins/${unit}.svg`}
              alt={unit}
              width="24px"
              height="24px"
            />
          </VStack>
        </HStack>
        <Tabs position="relative" variant="unstyled" w="100%">
          <TabList gap="16px">
            <Tab
              fontSize={14}
              fontWeight={700}
              p="0"
              _selected={{ color: "primary.500" }}
            >
              Offerings
            </Tab>
            <Tab
              fontSize={14}
              fontWeight={700}
              p="0"
              _selected={{ color: "primary.500" }}
            >
              Description
            </Tab>
          </TabList>
          <TabIndicator mt="2px" height="2px" bg="primary.500" />
          <TabPanels minHeight="128px">
            <TabPanel p="0" mt="28px">
              <VStack w="100%">
                <HStack justify="space-between" w="100%">
                  <Text fontSize={14} color="neutral.300">
                    Current Raised:
                  </Text>
                  <Text fontSize={14} fontWeight={700}>
                    {progress}%
                  </Text>
                </HStack>
                <Progress value={progress} w="100%" borderRadius="50px" />

                <HStack justify="space-between" w="100%">
                  <Text fontSize={14} color="neutral.300">
                    Total Goal:
                  </Text>
                  <Text fontSize={14} fontWeight={700}>
                    {nFormatter(launchpad.fHardCap.toFixed(2))} {unit}
                  </Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text fontSize={14} color="neutral.300">
                    Total Raised:
                  </Text>
                  <Text fontSize={14} fontWeight={700}>
                    {nFormatter(Number(currentCap))} {unit}
                  </Text>
                </HStack>

                <HStack justify="space-between" w="100%">
                  <Text fontSize={14} color="neutral.300">
                    Ended in:
                  </Text>
                  <Text fontSize={14} fontWeight={700}>
                    {endTimeFormatted.toUTCString()}
                  </Text>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel p="0" mt="28px">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    launchpad.description.length > 200
                      ? launchpad.description.substring(0, 200) + "..."
                      : launchpad.description,
                }}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Link
          href={`/launchpad/project/${launchpad.saleAddress}`}
          style={{ width: "100%" }}
        >
          <Button variant="primary" w="100%" p="14.5px 24px" fontSize={13}>
            See Detail
          </Button>
        </Link>
      </VStack>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`;

export default LaunchpadCard;
