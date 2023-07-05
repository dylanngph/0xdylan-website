"use client";

import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  useDisclosure,
  IconButton,
  VStack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { publicMenu } from "@/configs/menu";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import DonateButton from "../DonateButton";

const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const primaryButtonBg = useColorModeValue("teal", "teal");

  const pathname = usePathname();

  return (
    <>
      <IconButton
        aria-label="Menu"
        icon={<HiOutlineMenu />}
        variant="ghost"
        fontSize={24}
        order={2}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo/>
          </DrawerHeader>

          <DrawerBody>
            <VStack w="100%" align="start" spacing={12}>
              <DonateButton/>
              <VStack w="100%" spacing={8} onClick={onClose}>
                {publicMenu.map((item, index) => {
                  return (
                    <NavButton
                      key={index}
                      title={item.title}
                      href={item.href}
                      pathname={pathname}
                      icon={item.icon}
                      download={item.download}
                    />
                  );
                })}
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const NavButton = ({
  title,
  href,
  pathname,
  icon,
  download,
  ...props
}: {
  title: string;
  href: string;
  pathname: string;
  icon?: any;
  download?: boolean;
}) => {
  const isActive = href !== "/" ? pathname.startsWith(href) : pathname === href;

  return (
    <Button
      variant="tertiary"
      h="fit-content"
      as={download ? "a" : NextLink}
      px={1}
      fontWeight={500}
      fontSize={20}
      opacity={isActive ? 1 : 0.6}
      transition="opacity 0.15s ease-in-out"
      _hover={{
        opacity: 1,
      }}
      leftIcon={icon ? <Icon as={icon} /> : undefined}
      href={href}
      download={download}
      {...props}
    >
      {title}
    </Button>
  );
};

export default MobileDrawer;
