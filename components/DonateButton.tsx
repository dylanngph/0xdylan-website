"use client";

import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const DonateButton = (props:any) => {
  const primaryButtonBg = useColorModeValue("teal", "teal");

  return (
    <Button
        px={6}
        colorScheme={primaryButtonBg}
        as={NextLink}
        href='/donate'
        {...props}
    >
      Donate me
    </Button>
  );
};

export default DonateButton;
