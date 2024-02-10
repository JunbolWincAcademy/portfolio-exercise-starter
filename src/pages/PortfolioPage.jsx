import { portfolioItems } from '../utils/data';
import { Center, Flex, Box, Image, Heading, Text } from '@chakra-ui/react';
import { PortfolioItemCard } from './PortfolioItemCard';

export const PortfolioPage = ({ onSelectItem }) => { // before it had item also like this: ({ onSelectItem, item })
  //and having that "item" was causing the issue because item = null and the was causing to stop this code working but because PortfolioItemCard needed
  //to get some kind of item prop the map() function was created bellow to pass that "item"

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
          
          {/* The key prop plays a special role in React, especially when rendering lists of elements or components.
          It's not a prop in the traditional sense that you pass to your component and use within it.
          Instead, it helps React identify which items in a list have changed, were added, or were removed. 
          This identification process is crucial for efficiently updating the UI in response to data changes.
          Purpose of the key Prop:
          Uniqueness: Each key should have a unique value among its siblings. This uniqueness helps React's reconciliation
           process (the algorithm it uses to update the DOM efficiently).
          Performance: By providing a unique identifier for each component or element in a list, React can re-render only those items that changed,
          instead of re-rendering the entire list. This can lead to significant performance improvements, especially for large lists.
          Stability: Keys help React maintain the state within dynamic lists. Without keys, React might re-create components on every render,
           leading to lost state and focus.
          Why key is Not Passed as a Prop:
          Internal Use: The key prop is used by React internally and is not accessible in your component's props. If you try to access key within 
          your component, you'll find it's undefined.
          Not a Component Prop: Since key is meant for React to keep track of list items, it's not intended to be used as a data prop within your
          components. You can't pass key as a prop because React treats it differently from other props.
          With key={item.id} You're telling React that each PortfolioItemCard can be uniquely identified by item.id during the list rendering process.
           This helps React optimize rendering when the list changes. It's a best practice to always provide a unique key prop when rendering arrays
            of elements or components to ensure these performance benefits and avoid potential issues with component state and behavior. */}
          </Flex>
      </Flex>
    </Center>
  );
};


       
