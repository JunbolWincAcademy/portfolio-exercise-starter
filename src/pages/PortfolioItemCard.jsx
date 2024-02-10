import { Center, Flex, Box, Image, Heading, Text, Button } from '@chakra-ui/react';
import { portfolioItems } from '../utils/data';

export const PortfolioItemCard = ({ onSelectItem, item }) => {// I had a bug before because I forgot to wrap the prop destructed prop, it was 
  //like this before: (onSelectItem, item), notice that this is the destructured form of passing props, the other way is just passing "props"
  //EXPLANATION ABOUT THE DIFFERENCE ON USING JUST the placeholder "props" which is without destructuring : very important to understand 
  //this so the big explanation I added at the end of the code.Is important because it explaing how "props" in destructured and undestructured way works.


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
   /*  the difference between the use of {} sometimes is JSX syntax rules and sometimes is to have object as arguments
     Inside JSX, curly braces {} are used to embed JavaScript expressions in the markup. When you see {} in JSX,
     it means "evaluate the JavaScript expression inside these braces

    Why (item) Does Not Need {}
    When you write an arrow function like onClick={() => onSelectItem(item)},
    the item variable is directly accessible in the function's scope—it's a reference to a variable,
    not a JSX expression or a property being destructured from an object. Therefore, it doesn't need {} around it in this context. 
    The {} around the entire arrow function in onClick={} is required because you're embedding a JavaScript expression (the function itself) in JSX.
    <div>{item.title}</div> :Here, item.title is a JavaScript expression that accesses the title property of the item object.
     The curly braces tell JSX to evaluate this expression and insert its value into the markup. */

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

//-----------EXPLANATION ABOUT "props"

/* 
The term props in a React component function's parameter list is indeed a placeholder or a convention, but it's a very specific one. 
It represents the properties object passed to the component. When you define a component to take props as its parameter,
 props is just a variable name for the object that contains all the properties passed to the component. 
 You're not required to name it props—you could name it anything—but props is the conventional name used in React documentation and 
 community for readability and consistency.

When you use (props) without destructuring, you're saying, "Give me the entire properties object, and I'll access its properties using dot notation." 
You don't change how you pass properties to the component in the parent. The props object itself is automatically assembled by React based 
on the attributes you set on the component when you use it.

If You Don't Use Destructuring
If you decide not to use destructuring in PortfolioItemCard and instead to use props, the code inside PortfolioItemCard would access properties like this:

jsx
Copy code
export const PortfolioItemCard = (props) => {
  return (
    <div onClick={() => props.onSelectItem(props.item)}>
      {props.item.title}
    </div>
  );
};
And in the parent component (PortfolioPage or wherever you use PortfolioItemCard), you would still pass the props exactly the same way as when you were using destructuring:

jsx
Copy code
<PortfolioItemCard key={item.id} onSelectItem={onSelectItem} item={item}/>
Explanation
The way you pass props from a parent component does not change based on whether the child component uses destructuring or not. 
Destructuring is merely a syntactical convenience for accessing props within the child component—it doesn't affect how props are passed.

With Destructuring: It's just a concise way to unpack properties from the props object directly in the function's parameter list.
Without Destructuring: You access props using props.propertyName inside the component.
So, to answer your question, if you choose not to use destructuring in PortfolioItemCard, the code in 
PortfolioPage (or wherever you use PortfolioItemCard) does not change. You still pass props the same way, 
and React automatically assembles them into the props object for the child component. */