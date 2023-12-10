"use client";

import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { FcAssistant, FcCollaboration } from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <a
          href="/Services/#service-choice"
          onClick={() => setActiveNav("/Services/#service-choice")}
        >
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </a>
      </Stack>
    </Box>
  );
};

export default function ProductsService() {
  const [activeNav, setActiveNav] = useState("/");

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <chakra.h2 fontSize="3xl" fontWeight={"700"}>
          Our Offers
        </chakra.h2>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          We&apos;ve led the lighting industry with innovations that serve
          professional and consumer markets for more than 127 years. We provide
          our customers with high-quality lighting products, systems and
          services that unlock the extraordinary potential of light for brighter
          lives and a better world.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"For Professionals"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Energy-efficient LED lighting and smart lighting control minimizes lighting energy usage and help you achieve your sustainability goals."
            }
          />
          <Card
            heading={"For Consumers"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Whether setting the mood in the living room or brightening up your kitchen, our energy-efficient LED lamps and luminaires offer customizable solutions."
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}
