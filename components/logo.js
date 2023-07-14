import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
//import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'

const Logo = () => {
 
  return (
    <a href="/">      
        <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily='M PLUS Rounded 1c'
        fontWeight="bold"
        ml={3}
        >
            Long Kaestner
        </Text>
    </a>
  )
}

export default Logo
