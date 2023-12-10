import React from "react";
import {
  Container,
  chakra,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

const ServiceChoice = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <Container maxW={"5xl"} mt={7} mb={"12"} py={{ base: 20, md: 20 }}>
      <chakra.h2
        id="service-choice"
        fontSize="3xl"
        fontWeight={"700"}
        textAlign={"center"}
        mb={7}
      >
        Specify your needs
      </chakra.h2>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        <a
          href="#consumer-products"
          onClick={() => setActiveNav("#consumer-products")}
        >
          <Card maxW="md">
            <Image
              objectFit="cover"
              src="https://www.lighting.philips.co.uk/b-dam/b2c/en_US/marketing-catalog/lighting/operation-homebase/kitchen-worktop-spots.jpg"
              alt="Diversity & Inclusion Board"
            />
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">For Consumers</Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Whether setting the mood in the living room or brightening up
                your kitchen, our energy-efficient LED lamps and luminaires
                offer customizable solutions. Our consumer connected lighting
                offering, Philips Hue, is the world&apos;s best-selling and most
                wide-ranging wireless lighting system for the home and garden
              </Text>
            </CardBody>
          </Card>
        </a>
        <a href="#prof-products" onClick={() => setActiveNav("#prof-products")}>
          <Card maxW="md">
            <Image
              objectFit="cover"
              src="https://www.interact-lighting.com/content/dam/b2b-li/en_AA/interact/application-areas/smart-cities/busy-traffic-road-with-city-skyline-at-night.jpg"
              alt="Diversity & Inclusion Champions"
            />
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">For Professionals</Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Energy-efficient LED lighting and smart lighting control
                minimizes lighting energy usage and help you achieve your
                sustainability goals. Our Interact IoT Platform enables
                connected LED lighting systems and embedded sensor networks to
                collect data and deliver insights, benefits and new services
              </Text>
            </CardBody>
          </Card>
        </a>
      </Flex>
    </Container>
  );
};

export default ServiceChoice;
