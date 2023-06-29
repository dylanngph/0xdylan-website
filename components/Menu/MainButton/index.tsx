"use client";

import { useChain } from "@/hooks/useChain";
import React, { Fragment } from "react";
import ConnectButton from "./ConnectButton";
import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { shortenAddress } from "@/utils/format";
import { useAccount, useBalance } from "wagmi";
import { getConnectorIcon } from "@/utils/connectors";
import Image from "next/image";
import { getChainIcon } from "@/utils/chains";
import { CHAIN_INFO_MAP } from "@/configs/web3Config";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import { TbSwitch3 } from "react-icons/tb";
import styled from "@emotion/styled";
import ClientOnly from "@/components/ClientOnly";
import { useDisconnect } from "@/hooks/useDisconnect";
import { useConnect } from "@/hooks/useConnect";

const MainButton = () => {
  const { account } = useChain();

  const { data: balance } = useBalance({ address: account });
  const { connector: activeConnector, isConnected } = useAccount();
  const { chainId } = useChain();

  const { handleConnect } = useConnect({});
  const { disconnect } = useDisconnect();

  const { colorMode } = useColorMode();

  if (!isConnected || !account) {
    return (
      <ClientOnly>
        <ConnectButton />
      </ClientOnly>
    );
  }

  return (
    <Fragment>
      <Menu placement="bottom-end" autoSelect={false}>
        <MenuButton
          as={Button}
          h="fit-content"
          p="12px"
          variant="outline"
          borderRadius="12px"
          maxH="60px"
          bg={colorMode === "dark" ? "neutral.400" : "primary.50"}
          _hover={{ bg: colorMode === "dark" ? "neutral.350" : "primary.100" }}
          _active={{ bg: colorMode === "dark" ? "neutral.350" : "primary.100" }}
        >
          <HStack spacing={4}>
            <HStack>
              <Image
                src={getChainIcon(CHAIN_INFO_MAP[chainId].id) ?? ""}
                alt={`chain:${chainId.toString()}`}
                width={32}
                height={32}
              />
            </HStack>
            <VStack spacing="5px" align="start" lineHeight={1}>
              <Text fontSize={14} fontWeight={600}>
                {Number(balance?.formatted).toFixed(3)} {balance?.symbol}
              </Text>
              <Text
                fontSize={12}
                color={colorMode == "dark" ? "neutral.300" : "gray.400"}
              >
                {shortenAddress(account)}
              </Text>
            </VStack>
            <HStack>
              {activeConnector && (
                <HStack>
                  <Image
                    src={getConnectorIcon(activeConnector.id)}
                    alt={activeConnector.name}
                    width={32}
                    height={32}
                  />
                </HStack>
              )}
            </HStack>
          </HStack>
        </MenuButton>
        <MenuList>
          <VStack p="20px 24px" w="360px" spacing="24px" align="start">
            <HStack w="100%" align="start" justify="space-between">
              <HStack>
                <Box>
                  {activeConnector && (
                    <HStack>
                      <Image
                        src={getConnectorIcon(activeConnector.id)}
                        alt={activeConnector.name}
                        width={48}
                        height={48}
                      />
                    </HStack>
                  )}
                </Box>
                <VStack spacing="8px" align="start">
                  <Text fontSize={16} lineHeight={1} fontWeight={600}>
                    {shortenAddress(account)}
                  </Text>
                  <Text fontSize={14} color="neutral.300" lineHeight={1}>
                    {Number(balance?.formatted).toFixed(3)} {balance?.symbol}
                  </Text>
                </VStack>
              </HStack>
              <IconButton
                variant="link"
                aria-label="Logout"
                color="neutral.300"
                _hover={{
                  color: "red.500",
                }}
                icon={<RiLogoutBoxRLine />}
                fontSize={24}
                onClick={disconnect}
              />
            </HStack>
            <VStack w="100%" spacing="16px" align="start">
              <VStack align="start" w="100%">
                <Text color="neutral.300" fontSize={14}>
                  Current Network
                </Text>
                <StyledMenuItem>
                  <HStack w="100%" spacing="12px" justify="space-between">
                    <HStack w="100%" spacing="12px">
                      <Box position="relative">
                        <Image
                          src={getChainIcon(CHAIN_INFO_MAP[chainId].id) ?? ""}
                          alt={`chain:${chainId.toString()}`}
                          width={32}
                          height={32}
                        />
                        <ActiveDot
                          boxShadow={
                            colorMode == "dark"
                              ? "rgb(35, 35, 38) 0px 0px 0px 2px"
                              : "rgb(255, 255, 255) 0px 0px 0px 2px"
                          }
                        />
                      </Box>
                      <Text fontWeight={600}>
                        {CHAIN_INFO_MAP[chainId].name}
                      </Text>
                    </HStack>
                    <Icon as={HiChevronRight} color="neutral.300" />
                  </HStack>
                </StyledMenuItem>
              </VStack>
              <StyledMenuItem>
                <HStack>
                  <Icon as={TbSwitch3} />
                  <Text fontSize={14}>Switch Account</Text>
                </HStack>
              </StyledMenuItem>
            </VStack>
          </VStack>
        </MenuList>
      </Menu>
    </Fragment>
  );
};

const StyledMenuItem = (props: any) => {
  const { colorMode } = useColorMode();

  return (
    <MenuItem
      p="12px"
      borderRadius="8px"
      border="1px solid"
      borderColor={colorMode == "dark" ? "neutral.400" : "neutral.100"}
      _hover={{
        bg: colorMode == "dark" ? "neutral.400" : "neutral.50",
      }}
      {...props}
    />
  );
};
const ActiveDot = styled(Box)`
  width: 28%;
  height: 28%;
  border-radius: 50%;
  position: absolute;
  top: 60%;
  right: 0px;
  background-color: rgb(0, 211, 149);
`;

export default MainButton;
