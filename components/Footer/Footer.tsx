'use client'

import { Box, VStack , Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
        py={12}
        bg={useColorModeValue('gray.50', 'inherit')}
    >
        <VStack>
            <Text fontSize={14} opacity='.8'>
                © 2023 Dylan Nguyen aka 0xdylan. All Rights Reserved.
            </Text>
        </VStack>
    </Box>
  )
}

export default Footer