"use client";

import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@/configs/theme";
import ClientOnly from "@/components/ClientOnly";

export const Chakra = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ClientOnly>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </ClientOnly>
      <ChakraProvider resetCSS theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default Chakra;
