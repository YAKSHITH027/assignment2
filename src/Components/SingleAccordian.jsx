import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Image,
  Button,
} from '@chakra-ui/react'
import mcd from '../Assets/TableImages/MCD.png'
import { orders } from '../Utils/ordersData'
const SingleAccordian = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton border={'none'}>
            <Box as='span' flex='1' textAlign='left'>
              confirmed (238)
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Flex align={'center'} gap='2rem'>
            <Input placeholder='search' />
            <Select placeholder='Active orders'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Select placeholder='Amount'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </Select>
            <Select placeholder='Placed on'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Text>Options</Text>
          </Flex>
          <TableContainer>
            <Table variant='simple'>
              <Tbody>
                {orders.map((order) => {
                  console.log(order)
                  return (
                    <>
                      <Tr>
                        <Td width='18rem'>
                          <Flex align={'center'} gap='5px'>
                            <Box>
                              <Image src={order.logo} alt='image' />
                            </Box>
                            <Box>
                              <Text fontWeight={'600'} fontSize={'14px'}>
                                {order.brandName}
                              </Text>
                              <Text fontSize={'11px'}>{order.title}</Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td width='15rem'>{order.activeOrders}</Td>
                        <Td width='15rem'>{order.amount}</Td>
                        <Td width='15rem'>{order.placedOn}</Td>
                        <Td width='2.5rem' textAlign={'end'}>
                          <Button>...</Button>
                        </Td>
                      </Tr>
                    </>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Issues
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}></AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default SingleAccordian
