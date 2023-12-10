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

const ProfProducts = () => {
  return (
    <Box bgColor={"teal.600"}>
      <Container maxW={"5xl"} mb={"12"} pb={{ base: 20, md: 20 }}>
        <Stack spacing={{ base: 8, md: 14 }} pt={{ base: 10, md: 10 }}>
          <chakra.h2
            id="prof-products"
            fontSize="3xl"
            fontWeight={"700"}
            color={"yellow.400"}
          >
            Professional Products
          </chakra.h2>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card maxW="300">
              <CardBody>
                <Center>
                  <Image
                    src="https://www.assets.signify.com/is/image/Signify/4873907330e740529a40ad63013bc07b?hei=275&qlt=82"
                    alt="Luminaires"
                    borderRadius="lg"
                  />
                </Center>
                <Stack mt="5" spacing="3">
                  <Heading size="md">Luminaires</Heading>
                  <Text>
                    Our innovative, stylish and easy to install indoor
                    luminaires are suitable for use across a wide range of
                    industry lighting applications, whether you&apos;re looking
                    for warehouse lighting, shop lighting or office lighting.
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
                    src="https://www.assets.signify.com/is/image/PhilipsLighting/MASTER_LEDtube_InstantFit_HF_T8-BSP?hei=275&qlt=82"
                    alt="LED Tubes"
                    borderRadius="lg"
                  />
                </Center>
                <Stack mt="5" spacing="3">
                  <Heading size="md">LED Tubes</Heading>
                  <Text>
                    Explore the wide range of our LED tubes that offer
                    high-quality energy efficiency with environmentally friendly
                    lighting for homes, educational institutions, retail stores
                    and workplaces.
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
                    src="https://www.assets.signify.com/is/image/PhilipsLighting/ef4fc5ddd86b4e599b90a55d0152b11f?hei=275&qlt=82"
                    alt="Conventional Lamps"
                    borderRadius="lg"
                  />
                </Center>
                <Stack mt="5" spacing="3">
                  <Heading size="md">Conventional Lamps</Heading>
                  <Text>
                    Our conventional lighting system has a selection of non LED
                    lights that are suitable for accent and general lighting
                    applications in homes, offices, shops, hotels and
                    restaurants.
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

export default ProfProducts;
