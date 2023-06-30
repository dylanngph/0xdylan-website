'use client'

import React from 'react'
import {
  Box,
    Container, VStack, useColorModeValue
} from '@chakra-ui/react'
import Hero from './sections/Hero'
import About from './sections/About/About'
import NewsLetter from './sections/Newsletter.tsx/NewsLetter'

const HomePage = () => {
  return (
    <Box>
        <Container maxW='container.xl'>
          <Hero/>
        </Container>
        <Box py={10} bg={useColorModeValue('gray.50', 'neutral.600')}>
          <Container maxW='container.xl'>
            <About/>
            <NewsLetter/>
          </Container>
        </Box>
    </Box>
  )
}

export default HomePage