import { portfolioItems } from '../utils/data';
import {Center, Flex, Box, Image, Heading, Text, Button} from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { PortfolioItemCard } from './PortfolioItemCard';

export const PortfolioPage = () => {
  let itemA = portfolioItems[0];
  return (
    <Center
    // gap={2} 
    borderRadius='sm'
    bg="lightblue"
    w='700px' h='500'
    display="flex"
    flexDir="column"
    //textAlign="center"
    // alignItems="center"
    //justifyContent="center"
    >
      <Flex
        display="flex"
        flexDir="column"
        // alignItems="center"
        // justifyContent="center"
        textAlign="center">
        <Box 
          bg="red"
          w='400px'
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          ml="3"
          mb="2"
          textAlign="center"
        >
      <Heading size="md" textAlign="center" mb='2'>Welcome to the Portfolio of companies</Heading> {/* Displaying the drink's id */}
      <Text textAlign="left">In this website you can find some companies that might be interested for you</Text>
      </Box>
      <Box bg="green" w='400px' h='100'>
      <OrderedList>
       
      <ListItem> <PortfolioItemCard item={itemA}></PortfolioItemCard> </ListItem>
      <ListItem> <PortfolioItemCard item={itemA}></PortfolioItemCard> </ListItem>
  
      </OrderedList>

      </Box>

      </Flex>
      
    </Center>    
      
  );
};
