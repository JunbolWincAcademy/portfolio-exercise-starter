import { portfolioItems } from '../utils/data';
import { Center, Flex, Box, Image, Heading, Text, Button } from '@chakra-ui/react';

export const PortfolioItemPage = ({ item,onResetSelection }) => {// I understand now everytime this component receive props
  //from the parent they should be written here
  //item here becomes selectedItem

  return (
    <Center>
      <Flex display="flex" flexDir="column" alignItems="center" justifyContent="center" textAlign="center">
        <Heading mb={4}>{item.title}</Heading>
        <Text fontSize="lg" textAlign="left" mb={4}>
          {item.description}{' '}
        </Text>
        <Heading fontSize="lg" mb={4}>
          {' '}
          {item.summary}
        </Heading>
        <Image src={item.imageUrl} style={{ width: '60%', height: '50%' }} alt="Project image" mb={2}></Image>

        <Box
          // bg="yellow"
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="space-around"
          // textAlign="center"
          w="800px"
          h="60px"
          padding={1}
        >
          <Box size="lg" borderRadius="2px" bg="darkred" color="white" padding={2} margin="1rem">
            {item.skills[0]}
          </Box>
          <Box size="lg" borderRadius="2px" bg="darkred" color="white" padding={2} margin="1rem">
            {item.skills[1]}
          </Box>
          <Box size="lg" borderRadius="2px" bg="darkred" color="white" padding={2} margin="1rem">
            {item.skills[2]}
          </Box>
        </Box>
        <Button mt="4"  onClick={onResetSelection}>Go back to the start</Button>
      </Flex>
    </Center>
  );
};

//------------note on onClick={onResetSelection}
/* Direct Function Reference: onClick={onResetSelection}. This means that when the button is clicked, 
the onResetSelection function will be executed. onResetSelection is a function that you should pass 
down to PortfolioItemPage as a prop from the App component. This function, when called, will set the 
selectedItem state in App back to null.

Why Not onClick={() => onResetSelection()}?: Both onClick={onResetSelection} and onClick={() => onResetSelection()} 
are valid, but if you're directly calling the function without needing to pass any additional arguments
 or needing to do any additional operations, you can use the direct function reference for simplicity and 
 slight performance benefit. If you needed to pass arguments or do more within the click handler, 
 then you'd use the arrow function syntax. */
