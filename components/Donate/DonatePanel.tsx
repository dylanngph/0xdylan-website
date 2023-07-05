"use client";

import React, { useEffect } from "react";
import {
  Box,
  Text,
  Stack,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  IconButton,
  Icon,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { BiWalletAlt } from "react-icons/bi";
import { shortenAddress } from "@/utils/format";
import { LuCopy } from "react-icons/lu";
import { useCopyToClipboard } from "usehooks-ts";

const DonatePanel = () => {
  const myAddress = "0x9fEacfa9DAD309B543A489b1c7708Ef0da006281";
  const [value, copy] = useCopyToClipboard();
  const toast = useToast();

  const triggerToast = () => {
    return toast({
      title: "Copied Address",
      description: `Address copied to clipboard.`,
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Box bg={useColorModeValue("neutral.100", "neutral.500")} p={5}>
      {/* <Tabs isFitted colorScheme='teal'>
        <TabList>
          <Tab fontWeight={600}>Overview</Tab>
          <Tab fontWeight={600}>Donate now</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
      <Text fontWeight={600} fontSize={24}>
        My Wallet
      </Text>
      <HStack mt="24px" justify="space-between">
        <HStack>
          <Icon as={BiWalletAlt} fontSize={24} color="teal" />

          <Text>{shortenAddress(myAddress)}</Text>
        </HStack>

        <IconButton
          aria-label="Copy"
          icon={<LuCopy />}
          variant="tertiary"
          onClick={() => {
            copy(myAddress);
            return triggerToast();
          }}
        />
      </HStack>
    </Box>
  );
};

export default DonatePanel;
