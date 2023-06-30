'use client'

import React from 'react'
import {
    Box,
    HStack,
    VStack,
    Text,
    Input,
    useColorModeValue,
    Button
} from '@chakra-ui/react'


const NewsLetter = () => {
  return (
    <VStack align='start' py={32} w='100%' spacing={4}>
        <Text fontSize={{base: 'xl', lg: '2xl'}} fontWeight={700}>Sign up for newsletter</Text>
        <Input
            placeholder='Enter your email address'
            variant={useColorModeValue('filled', 'outline')}
        />
        <Button
            colorScheme={useColorModeValue('purple','orange')}
        >
            Subscribe
        </Button>
    </VStack>
  )
}

export default NewsLetter