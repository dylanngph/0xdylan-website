'use client'

import React from 'react'
import {
    Container, VStack
} from '@chakra-ui/react'
import Hero from './sections/Hero'
import About from './sections/About/About'

const HomePage = () => {
  return (
    <Container maxW='container.xl'>
        <Hero/>
        <About/>
    </Container>
  )
}

export default HomePage