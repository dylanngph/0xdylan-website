'use client'

import React from 'react'
import {
    Container, VStack
} from '@chakra-ui/react'
import Hero from './sections/Hero'
import UpcomingSale from './sections/UpcomingSale'
import Analytics from './sections/Analytics'

const HomePage = () => {
  return (
    <Container maxW='container.xl'>
        <Hero/>
    </Container>
  )
}

export default HomePage