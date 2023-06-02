import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../Assets/Sidebar/Marriott_International 1.png'

const Sidebar = ({ children }) => {
  return (
    <Flex>
      <Box width={'15%'} height='100vh' borderWidth='1px'>
        <Flex justify={'center'} mt='2rem'>
          <Image src={logo} />
        </Flex>
        <Flex align={'center'} flexDir={'column'} gap='1rem' mt='2rem'>
          <Box width={'6rem'}>Reporst</Box>
          <Box width={'6rem'}>Worksapce</Box>
          <Box width={'6rem'}>Reporst</Box>
        </Flex>
      </Box>
      <Box width={'80%'}>{children}</Box>
    </Flex>
  )
}

export default Sidebar
