import React from "react";
import {
  Heading,
  SimpleGrid,
  Text,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

const Cards = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <SimpleGrid spacing={4} templateColumns="(auto-fill, minmax(200px, 1fr))">
      <Flex>
        <Card>
          <CardHeader>
            <Heading size="md"> About Us</Heading>
          </CardHeader>
          <CardBody>
            <Text> Who are we? </Text>
          </CardBody>
          <CardFooter>
            <a href="/aboutus" onClick={() => setActiveNav("/aboutus")}>
              <Button>View here</Button>
            </a>
          </CardFooter>
        </Card>
        <Spacer />
        <Card>
          <CardHeader>
            <Heading size="md"> Services </Heading>
          </CardHeader>
          <CardBody>
            <Text>What do we offer?</Text>
          </CardBody>
          <CardFooter>
            <a href="/Services" onClick={() => setActiveNav("/Services")}>
              <Button>View here</Button>
            </a>
          </CardFooter>
        </Card>
      </Flex>
    </SimpleGrid>
  );
};

export default Cards;
