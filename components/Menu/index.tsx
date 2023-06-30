"use client";

import React, { Fragment } from "react";
import {
  Container,
  Flex,
  Button,
  Box,
  Icon,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { publicMenu } from "@/configs/menu";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import { useDevice } from "@/hooks/useDevice";
import {
  HiOutlineSun,
  HiOutlineMenu,
  HiMoon,
} from "react-icons/hi";
import { useOnScroll } from "@/hooks/useOnScroll";

const Menu = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isDesktop, isMobile } = useDevice();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isScrolling } = useOnScroll();

  const iconButtonBg = useColorModeValue('purple', 'orange');
  const primaryButtonBg = useColorModeValue('teal', 'teal');
  const bg = useColorModeValue('neutral.0', 'neutral.500');

  return (
    <Fragment>
      <Wrapper boxShadow={{ lg: isScrolling ? "sm" : "none" }} bg={bg}>
        <Container maxW="container.xl">
          <Flex w="100%" justify="space-between" align="center">
            <HStack spacing={12}>
              <Logo />
              {isDesktop && (
                <HStack spacing={8}>
                  {publicMenu.map((item, index) => {
                    return (
                      <NavButton
                        key={index}
                        title={item.title}
                        href={item.href}
                        pathname={pathname}
                        icon={item.icon}
                      />
                    );
                  })}
                </HStack>
              )}
            </HStack>

            <HStack spacing={2} minH="60px">
              {isDesktop ? (
                <>
                  
                  <Button
                    px={6}
                    colorScheme={primaryButtonBg}
                  >
                    Donate me
                  </Button>
                  <IconButton
                    aria-label="Toggle Color Mode"
                    colorScheme={iconButtonBg}
                    icon={colorMode === "light" ? <HiMoon /> : <HiOutlineSun />}
                    fontSize={18}
                    onClick={toggleColorMode}
                  />
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
      </Wrapper>
      <Inner pt="60px">{children}</Inner>
    </Fragment>
  );
};

const NavButton = ({
  title,
  href,
  pathname,
  icon,
  ...props
}: {
  title: string;
  href: string;
  pathname: string;
  icon?: any;
}) => {
  const isActive = href !== "/" ? pathname.startsWith(href) : pathname === href;

  return (
    <Button
      variant='tertiary'
      h="fit-content"
      px={1}
      fontWeight={400}
      opacity={isActive ? 1 : 0.6}
      transition="opacity 0.15s ease-in-out"
      _hover={{
        opacity: 1,
      }}
      leftIcon={icon ?
        <Icon as={icon} /> : undefined
      }
      {...props}
    >
      {title}
    </Button>
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
