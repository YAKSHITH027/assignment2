import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SingleAccordian from '../Components/SingleAccordian'
import { AiOutlinePlus } from 'react-icons/ai'

const Orders = () => {
  return (
    <Box>
      <Flex justify={'space-between'} px='1rem' py='0.6rem'>
        <Heading fontSize={'25px'}>Orders</Heading>
        <Button colorScheme='linkedin'>
          {' '}
          <Text as='span'>
            <AiOutlinePlus />
          </Text>
          Add Order
        </Button>
      </Flex>
      <hr />
      <Box p='2rem'>
        <SingleAccordian />
      </Box>
    </Box>
  )
}

export default Orders
