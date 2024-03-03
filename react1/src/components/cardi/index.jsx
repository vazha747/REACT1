import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
  Divider,
  Text,
  Heading,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
const card = ({ item }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={item.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.title}</Heading>
          <Text>
           {item.description}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default card;
