import { portfolioItems } from '../utils/data';
import { Center, Flex, Box, Image, Heading, Text } from '@chakra-ui/react';
import { PortfolioItemCard } from './PortfolioItemCard';

export const PortfolioPage = ({ onSelectItem }) => { // before it had item also
  let itemA = portfolioItems[0];
  return (
    <Center
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      borderRadius='md'
      bg="lightblue"
      w='1200px' h='500'
    >
      <Flex
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        // bg="yellow"
        w='100%'>
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          // bg="red"
          w='50%'
          ml="3"
          mb="2"
          textAlign="center"
        >
          <Heading size="md" textAlign="center" mb='2'>Welcome to the Portfolio of companies</Heading>
          <Text textAlign="left">In this website you can find some companies that might be interested for you</Text>
        </Flex>
        <Flex
          flexDir={{ base: 'column', sm: 'row' }}
          justifyContent={'space-around'}
          // bg="green"
          w="100" h='350'>
          {/* Ensure onSelectItem is passed to all cards if intended */}
          {portfolioItems.map(item => (
            <PortfolioItemCard key={item.id} onSelectItem={onSelectItem} item={item}/>// I need to understand this "key" here???
          ))}
          
            {/*there was a bug here. PorfolioPage was not
          been rendered because I was passing null to PortfolioItemCard. The solution was to use this condition
          using the && operator that works like this:             */}
        </Flex>
      </Flex>
    </Center>
  );
};


       
