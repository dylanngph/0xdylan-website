"use client";

import React, { Fragment } from "react";
import {
  Container,
  Flex,
  Button,
  ButtonGroup,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Icon,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { publicMenu, submenu } from "@/configs/menu";
import { IoSearch } from "react-icons/io5";
import MainButton from "./MainButton";
import styled from "@emotion/styled";
import { usePathname, useSearchParams } from "next/navigation";
import { useDevice } from "@/hooks/useDevice";
import { HiOutlineSun, HiOutlineMoon, HiOutlineMenu } from "react-icons/hi";
import { useOnScroll } from "@/hooks/useOnScroll";

const Menu = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isDesktop, isMobile } = useDevice();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isScrolling } = useOnScroll();

  return (
    <Fragment>
      <Wrapper
        boxShadow={{ lg: isScrolling ? "sm" : "none" }}
        borderBottom="1px solid"
        borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
        bg={colorMode === "light" ? "inherit" : "neutral.500"}
      >
        <Container maxW="100%" px={6} py={2}>
          <Flex w="100%" justify="space-between" align="center">
            <HStack align="center" spacing={6}>
              <Logo />
              {isDesktop ? (
                <Box>
                  <InputGroup>
                    <Input
                      placeholder="Search BUIDLs, Hackathons..."
                      width={{ base: "auto", lg: "300px" }}
                      variant="filled"
                      borderRadius={{ base: "full", lg: "full" }}
                      _placeholder={{ fontSize: 14 }}
                    />
                    <InputRightElement
                      color={colorMode == "dark" ? "gray.300" : "gray.500"}
                      opacity="0.5"
                      // w={8}
                      // h={8}
                    >
                      <IoSearch />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              ) : (
                <IconButton
                  aria-label="Search"
                  icon={<IoSearch />}
                  variant="ghost"
                />
              )}
            </HStack>
            <HStack spacing={6} minH="60px">
              {isDesktop ? (
                <>
                  <Button variant="link">
                    Create Account
                  </Button>
                  <MainButton />
                </>
              ) : (
                <IconButton
                  aria-label="Menu"
                  icon={<HiOutlineMenu />}
                  variant="ghost"
                  fontSize={24}
                  order={2}
                />
              )}
            </HStack>
          </Flex>
        </Container>
        {isDesktop && (
          <Container maxW="100%" px={6}>
            <HStack w="100%" justify="space-between" pb="2px">
              <HStack spacing={8}>
                {publicMenu.map((item, index) => {
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <NavButton
                      key={index}
                      isActive={isActive}
                      title={item.title}
                    />
                  );
                })}
              </HStack>
              <HStack spacing={4}>
                {submenu.map((item, index) => {
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <NavButton
                      key={index}
                      isActive={isActive}
                      title={item.title}
                    />
                  );
                })}
                <IconButton
                  aria-label="Toggle Color Mode"
                  variant="tertiary"
                  px={3}
                  pb={1}
                  icon={
                    colorMode === "light" ? <HiOutlineSun /> : <HiOutlineMoon />
                  }
                  fontSize={24}
                  onClick={toggleColorMode}
                />
              </HStack>
            </HStack>
          </Container>
        )}
      </Wrapper>
      <Inner pt={isDesktop ? "118px" : "78px"}>{children}</Inner>
    </Fragment>
  );
};

const NavButton = ({
  isActive,
  title,
}: {
  disabled?: boolean;
  isActive: boolean;
  title: string;
}) => {
  return (
    <Box
      h="fit-content"
      px={1}
      color={isActive ? "primary.400" : "inherit"}
      cursor="pointer"
      fontWeight={600}
      position="relative"
      transition="color 0.15s ease-in-out"
      _hover={{
        color: "primary.400",
      }}
      _before={{
        content: '""',
        display: "block",
        height: "2px",
        width: "100%",
        bg: "primary.400",
        opacity: isActive ? 1 : 0,
        transition: "opacity 0.15s ease-in-out",
        position: "absolute",
        bottom: "-10px",
        left: 0,
      }}
    >
      {title}
    </Box>
  );
};

const Wrapper = styled(Box)`
  position: fixed;
  z-index: 500;
  width: 100%;
  top: 0;
  left: 0;
`;
const Inner = styled(Box)``;

export default Menu;
