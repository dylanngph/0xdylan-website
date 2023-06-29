"use client";

import React from "react";
import {
  Box,
  Stack,
  VStack,
  useColorMode,
  Text,
  useColorModeValue,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { TypeAnimation } from 'react-type-animation';
import { FiCopy } from 'react-icons/fi';
import VoxelDogLoader from "@/components/Model/VoxelDogLoader";
import dynamic from "next/dynamic";


const LazyVoxelDog = dynamic(() => import('@/components/Model/VoxelDog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Hero = () => {

  return (
    <Box py='8rem'>
      <Stack direction={{base: 'column', lg: 'row'}} w='100%' justifyContent='space-between' minH='380px'>
        <VStack align='start' spacing={9}>
          <VStack align='start'>
            <Text fontFamily='SamsungSharpSans' fontWeight={700} fontSize={{base: 56 ,lg: 72}} lineHeight={1}>
              Web3 Builder
            </Text>
            <Text fontFamily='SamsungSharpSans' fontSize={{base: 24 , lg: 32}} fontWeight={700}>
            through Frontend Excellence
            </Text>
            <Text color='neutral.300' maxW='500px'>
            Join me on this exciting journey as we shape the future of the web together, one exceptional frontend experience at a time.
            </Text>
          </VStack>
          <HStack
            bg={useColorModeValue("blackAlpha.50", "whiteAlpha.50")}
            px={4}
            py={3}
            borderRadius={4}
            border='1px solid'
            borderColor={useColorModeValue("gray.200", "gray.700")}
            w={{base: '100%' ,lg: '450px'}}
            justify='space-between'
            align='baseline'
          >
            <HStack align='baseline'>
              <Text fontWeight={600} fontSize={20}>
                $
              </Text>
              <TypeAnimation
                sequence={[
                  "Hello, I'm a Frontend Developer.",
                  2000, // Waits 1s
                  "Hello, I'm building web3 applications.",
                  2000, // Waits 2s
                  "Hello, I'm also building communities.",
                  2000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontWeight: '600', fontSize: '16px', display: 'inline-block' }}
              />
            </HStack>
            <IconButton
              aria-label='Copy'
              variant='ghost'
              icon={<FiCopy/>}
              borderRadius='8px'
            />
          </HStack>
        </VStack>
        <Box overflow='hidden'>
          <LazyVoxelDog />
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
