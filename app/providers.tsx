'use client';

import Chakra from '@/providers/Chakra';
import React from 'react'

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <Chakra>
        {children}
    </Chakra>
  )
}

export default Providers