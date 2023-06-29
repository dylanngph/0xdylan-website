"use client";

import React, { Fragment } from "react";
import {
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useConnect } from "@/hooks/useConnect";
import Image from "next/image";
import { getConnectorIcon } from "@/utils/connectors";

interface ConnectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectorModal = ({ isOpen, onClose }: ConnectorModalProps) => {
  const { handleConnect, connectors } = useConnect({});
  const {colorMode} = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pt={6} px={8}>Connect your wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody px={8}>
          <VStack align="start" w="100%">
            {connectors.map((connector, index) => (
              <Button
                key={index}
                variant="solid"
                w="100%"
                h="auto"
                px="16px"
                py="12px"
                justifyContent="start"
                fontWeight={500}
                leftIcon={
                  <Image
                    src={getConnectorIcon(connector.id)}
                    width={32}
                    height={32}
                    alt={connector.name}
                  />
                }
                onClick={() => {
                  handleConnect(connector);
                  return onClose();
                }}
              >
                {connector.name}
                {connector.id !== "walletConnect" &&
                  connector.id !== "coinbaseWallet" && (
                    <Box
                      ml="auto"
                      borderRadius="999px"
                      bg={colorMode == 'dark' ? "whiteAlpha.200" : "blackAlpha.200"}
                      px={3}
                      py={1}
                      fontSize={12}
                    >
                      {!connector.ready ? "Not Installed" : "Installed"}
                    </Box>
                  )}
              </Button>
            ))}
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="start" px={8} pb={6}>
          <Box fontSize={13} color="neutral.300">
            By continuing, you agree to the{" "}
            <Text as="a" href="/" color="primary.500" display="inline-block">
              Terms and conditions.
            </Text>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConnectorModal;
