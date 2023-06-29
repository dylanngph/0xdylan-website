"use client";

import React from "react";
import Navbar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Box pb={8}>
      <Navbar path={pathname} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}
        <AnimatePresence
          mode='wait'
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          {children}
        </AnimatePresence>
        {/* <Footer /> */}
      </Container>
    </Box>
  );
};

export default MainLayout;
