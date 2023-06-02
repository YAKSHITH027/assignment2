import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import SingleAccordian from '../Components/SingleAccordian'

const Orders = () => {
  return (
    <Box>
      <Flex justify={'space-between'} px='1rem' py='0.6rem'>
        <Heading>Orders</Heading>
        <Button colorScheme='linkedin'>Add Order</Button>
      </Flex>
      <hr />
      <Box p='2rem'>
        <SingleAccordian />
      </Box>
    </Box>
  )
}

export default Orders
