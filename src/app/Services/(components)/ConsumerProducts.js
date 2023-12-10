import React from "react";
import {
  Container,
  chakra,
  Center,
  Box,
  Stack,
  Card,
  CardBody,
  Divider,
  Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

const ConsumerProducts = () => {
  return (
    <Box bgColor={"pink.100"}>
      <Container maxW={"5xl"} pb={{ base: 20, md: 20 }}>
        <Stack spacing={{ base: 8, md: 14 }} pt={{ base: 10, md: 10 }}>
          <chakra.h2
            id="consumer-products"
            fontSize="3xl"
            fontWeight={"700"}
            color={"pink.500"}
          >
            Consumer Products
          </chakra.h2>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card maxW="300">
              <CardBody>
                <Center>
                  <Image
                    src="https://www.lighting.philips.co.uk/b-dam/b2c/en_US/marketing-catalog/lighting/operation-homebase/bulb-family.jpg"
                    alt="Light Bulbs"
                    borderRadius="lg"
                  />
                </Center>
                <Stack mt="5" spacing="3">
                  <Heading size="md">Light Bulbs</Heading>
                  <Text>
                    Discover our wide range of light bulbs, find the right light
                    for your home and lifestyle.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
            <Card maxW="300">
              <CardBody>
                <Center>
                  <Image
                    src="https://www.lighting.philips.co.uk/b-dam/b2c/en_US/marketing-catalog/lighting/operation-homebase/luminaires.jpg"
                    alt="Lighting Fixtures"
                    borderRadius="lg"
                  />
                </Center>
                <Stack mt="5" spacing="3">
                  <Heading size="md">Lighting Fixtures</Heading>
                  <Text>
                    Discover our wide range of lighting fixtures, find the right
                    fixture for your home and lifestyle.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
            <Card maxW="300">
              <CardBody>
                <Center>
                  <Image
                    src="https://www.lighting.philips.co.uk/b-dam/b2c/en_US/marketing-catalog/lighting/operation-homebase/smart-lighting-family.jpg"
                    alt="Smart Lighting"
                    borderRadius="lg"
                  />
                </Center>
                <Stack mt="5" spacing="3">
                  <Heading size="md">Smart Lighting</Heading>
                  <Text>
                    From the simplest of smart products to full smart lighting
                    systems, Philips Smart LED lighting can help you get the
                    most out of your home
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default ConsumerProducts;
