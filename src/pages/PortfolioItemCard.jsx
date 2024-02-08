import { Center, Flex, Box, Image, Heading, Text, Button } from '@chakra-ui/react';
import { portfolioItems } from '../utils/data';

export const PortfolioItemCard = ({ item }) => {
  return (
    <Flex display="flex" flexDir="column" alignItems="center" justifyContent="center" textAlign="center">
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        // justifyContent="center"
        textAlign="center"
        borderRadius="md"
        bg="gray"
        w="260px"
        h="320"
        padding={4}
      >
        <Box
          display="flex"
          flexDir="row"
          flexWrap="wrap"
          // alignItems="center"
          // justifyContent="space-around"
          borderRadius="10px"
          bg="lightgray"
          w="240px"
          h="260px"
        >
          <Image borderRadius="10px 10px 0px 0px" h="50%" w="100%" bg="tomato" src={item.imageUrl} objectFit="cover" mb="3"></Image>
          <Box
            ml="1"
            mb="1"
            // bg="green"
            w="250"
            h="20"
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
            w="350px"
            h="30"
          >
            <Button size="xs" bg="darkred" color="white">
              <Text size="0.5rem">Web Design</Text>
            </Button>
            <Button size="xs" bg="darkred" color="white">
              UI Design
            </Button>
            <Button size="xs" bg="darkred" color="white">
              UX Design
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
