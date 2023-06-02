import React, { useState } from 'react'
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
  const [data, setData] = useState(orders)

  const handleDate = (e) => {
    let val = e.target.value
    console.log(val)
    if (val == 'asc') {
      let newArr = [...data].sort((a, b) => a.date - b.date)
      setData(newArr)
    } else if (val == 'desc') {
      let newArr = [...data].sort((a, b) => b.date - a.date)
      setData(newArr)
    }
  }
  const handleAmount = (e) => {
    let val = e.target.value
    console.log(val)
    if (val == 'asc') {
      let newArr = [...data].sort((a, b) => a.amount - b.amount)

      setData(newArr)
    } else if (val == 'desc') {
      let newArr = [...data].sort((a, b) => b.amount - a.amount)

      setData(newArr)
    }
  }
  const handleFilter = (e) => {
    let val = e.target.value
    if (val == '') {
      setData(orders)
      return
    }
    setData(orders.filter((item) => item.status === val))
  }

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
            <Select placeholder='Active orders' onChange={handleFilter}>
              <option value='confirmed'>Confirmed</option>
              <option value='delivered'>Delivered</option>
              <option value='refund'>Refund Completed(30)</option>
              <option value='pending'>Pending</option>
            </Select>
            <Select placeholder='Amount' onChange={handleAmount}>
              <option value='asc'>Asc</option>
              <option value='desc'>Desc</option>
            </Select>
            <Select placeholder='Placed on' onChange={handleDate}>
              <option value='asc'>Asc</option>
              <option value='desc'>Desc</option>
            </Select>
            <Text>Options</Text>
          </Flex>
          <TableContainer>
            <Table variant='simple'>
              <Tbody>
                {data.map((order) => {
                  return (
                    <>
                      <Tr>
                        <Td width='18rem'>
                          <Flex align={'center'} gap='5px'>
                            <Box>
                              <Image
                                width='30px'
                                src={order.logo}
                                alt='image'
                              />
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
