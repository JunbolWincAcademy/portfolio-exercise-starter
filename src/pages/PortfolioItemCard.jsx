import { Center, Flex, Box, Image, Heading, Text, Button } from '@chakra-ui/react';
import { portfolioItems } from '../utils/data';

export const PortfolioItemCard = ({ onSelectItem, item }) => {

  return (
    <Flex
    display="flex"
    flexDir="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    cursor="pointer"
    w="350px"
    h="420px"
    margin={4}
    // onClick={() => item=(portfolioItems[0])} this was wrong before
    onClick={() => onSelectItem(item)} // Example for one card, adjust accordingly. I need to understand
    //the difference between the use of {} sometimes is JSX syntax rules and sometimes is to have object as arguments
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        // justifyContent="center"
        textAlign="center"
        borderRadius="md"
        bg="gray"
        w="370px"
        h="600px"
        padding={2}
      >
        <Box
          display="flex"
          flexDir="row"
          flexWrap="wrap"
          // alignItems="center"
          // justifyContent="space-around"
          borderRadius="10px"
          bg="lightgray"
         
          w="350px"
          h="400px"
        >
          <Image borderRadius="10px 10px 0px 0px" h="50%" w="100%" bg="tomato" src={item.imageUrl} objectFit="cover" mb="3"></Image>
          <Box
            ml="1"
            mb="1"
            // bg="green"
            w="300"
            h="20"
            padding={2}
          >
            <Heading size="sm" textAlign="left" mb="1">
              {item.title}
            </Heading>
            <Text fontSize="xs" textAlign="left">
              {item.summary}
            </Text>
          </Box>
          <Box
            // bg="white"
            display="flex"
            flexDir="row"
            alignItems="center"
            justifyContent="space-around"
            // textAlign="center"
            w="400px"
            h="30"
            padding={1}
          >
            <Box size="xs" borderRadius="2px" bg="darkred" color="white" padding={2}>
            <Text fontSize={"10"}>{item.skills[0]}</Text>
            </Box>
            <Box size="xs" borderRadius="2px" bg="darkred" color="white" padding={2}>
            <Text fontSize={"10"}>{item.skills[1]}</Text>
            </Box>
            <Box size="xs" borderRadius="2px" bg="darkred" color="white" padding={2}>
            <Text fontSize={"10"}>{item.skills[2]}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
