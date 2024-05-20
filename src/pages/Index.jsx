import { Container, VStack, HStack, Box, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Notebook",
    description: "A high-quality notebook for all your writing needs.",
    price: "$10.00",
    image: "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxub3RlYm9va3xlbnwwfHx8fDE3MTYyMTc1NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Pen",
    description: "Smooth and reliable pen for everyday use.",
    price: "$2.00",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZW58ZW58MHx8fHwxNzE2MjE3NTU3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Pencil",
    description: "Durable pencil for sketching and writing.",
    price: "$1.00",
    image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZW5jaWx8ZW58MHx8fHwxNzE2MjE3NTU3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
    <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
    <VStack spacing={2} mt={4}>
      <Heading size="md">{product.name}</Heading>
      <Text>{product.description}</Text>
      <Text fontWeight="bold">{product.price}</Text>
      <Button colorScheme="teal" leftIcon={<FaShoppingCart />}>
        Add to Cart
      </Button>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Stationery Store
        </Heading>
        <HStack spacing={8} wrap="wrap" justify="center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
