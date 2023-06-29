"use client";

import React, {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { recoverMessageAddress } from "viem";
import { useSignMessage } from "wagmi";
import { SIGN_MESSAGE, accessToken } from "@/storage/auth";
import { useChain } from "@/hooks/useChain";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  VStack,
  Text,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import { useDisconnect } from "@/hooks/useDisconnect";
import { connectSign } from "@/api/auth";
import { useAccessToken } from "@/hooks/useAccessToken";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  //import local storage variables
  const { accessToken, triggerSignMessage, setAccessToken, logout } =
    useAccessToken();

  //Modal function trigger for signing message
  const { isOpen, onOpen, onClose } = useDisclosure();

  //import disconnect function from useDisconnect hook to disconnect from wallet
  const { disconnect } = useDisconnect();

  //useRef hook to check if signing in order to prevent multiple sign requests
  const isSigningRef = useRef(false);

  //useSignMessage hook to sign message, returns signature, error, isLoading, signMessage, reset, etc.
  const {
    data: sig,
    error,
    isLoading,
    signMessage,
    reset,
  } = useSignMessage({
    onSettled: () => {
      isSigningRef.current = false;
    },
    onSuccess: () => {
      onClose();
    },
    onError: () => {
      disconnect();
      return onClose();
    },
  });

  //useChain hook to get account and signer
  const { account, signer } = useChain();

  //useEffect hook to check if signing and if there is no access token, then open modal
  useEffect(() => {
    if (signer && !isSigningRef.current && !accessToken) {
      isSigningRef.current = true;
      onOpen();
    }
  }, [accessToken, onOpen, signMessage, signer, triggerSignMessage]);

  //Sign message function
  const handleSignMessage = () => {
    signMessage({ message: SIGN_MESSAGE });
  };

  //Login function to connect to backend and get access token from backend
  const login = useCallback(async () => {
    if (account && sig) {
      const { token } = await connectSign(account, sig);
      setAccessToken(token);
    }
  }, [account, setAccessToken, sig]);

  useEffect(() => {
    login();
  }, [account, login]);

  //useEffect hook to check if there is an access token and if there is no account, then logout
  useEffect(() => {
    if (!account) {
      logout();
    }
  }, [accessToken, account, logout]);

  useEffect(() => {
    if (!accessToken) {
      reset();
    }
  }, [accessToken, reset]);

  //useEffect hook to check if there is an access token and if there is, then close modal
  useEffect(() => {
    if (accessToken) {
      onClose();
    }
  }, [accessToken, onClose]);

  const {colorMode} = useColorMode();

  return (
    <Fragment>
      {children}
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={6}>
            <HStack w="100%" justify="center" mb={6}>
              <Image src="/favicon.svg" alt="logo" width={120} height={120} />
            </HStack>
            <VStack textAlign="center" w="100%">
              <Text fontSize={20} fontWeight={700}>
                Welcome to the BionNetwork Beta!
              </Text>
              <Text fontSize={14} color="neutral.300">
                By signing your wallet and using BionNetwork App, you agree to
                our Terms of Service and Privacy Policy.
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter
            justifyContent="start"
            borderTop="1px solid"
            borderColor={colorMode =='dark' ? "neutral.400": 'neutral.100'}
            gap={2}
          >
            <Button
              variant="outline"
              onClick={() => {
                disconnect();
                return onClose();
              }}
              w="50%"
            >
              Cancel
            </Button>
            <Button
              isLoading={isLoading}
              variant="primary"
              w="50%"
              onClick={handleSignMessage}
            >
              Accept & Sign
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default AuthProvider;
