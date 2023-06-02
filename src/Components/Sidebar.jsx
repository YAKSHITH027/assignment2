import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../Assets/Sidebar/Marriott_International 1.png'
import { Link } from 'react-router-dom'

const Sidebar = ({ children }) => {
  return (
    <Flex>
      <Box width={'15%'} height='100vh' borderWidth='1px'>
        <Flex justify={'center'} mt='2rem'>
          <Image src={logo} />
        </Flex>
        <Flex align={'center'} flexDir={'column'} gap='1rem' mt='2rem'>
          <Link to='/'>
            <Box
              width={'7rem'}
              py='2px'
              textAlign={'center'}
              borderRadius={'4px'}
              _hover={{ bg: 'rgba(27, 89, 248, 0.1)' }}
            >
              Report
            </Box>
          </Link>
          <Link to='/workspace'>
            <Box
              width={'7rem'}
              py='2px'
              textAlign={'center'}
              borderRadius={'4px'}
              _hover={{ bg: 'rgba(27, 89, 248, 0.1)' }}
            >
              Worksapce
            </Box>
          </Link>
          <Link to='/setting'>
            <Box
              width={'7rem'}
              py='2px'
              textAlign={'center'}
              borderRadius={'4px'}
              _hover={{ bg: 'rgba(27, 89, 248, 0.1)' }}
            >
              Settings
            </Box>
          </Link>
        </Flex>
      </Box>
      <Box width={'80%'}>{children}</Box>
    </Flex>
  )
}

export default Sidebar
