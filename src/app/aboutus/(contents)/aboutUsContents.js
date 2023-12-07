import { Box, Heading, Container, Text, Stack, chakra } from "@chakra-ui/react";
import OurHistory from "./OurHistory";

export default function AboutUs() {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        // textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 20 }}
      >
        <Heading
          fontWeight={600}
          textAlign={"center"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          About
          <Text as={"span"} color={"green.400"}>
            {" "}
            Us
          </Text>
        </Heading>
        <chakra.h2 pt={20} textAlign={"center"} fontSize="3xl" fontWeight="700">
          Number one in connected, LED and conventional lighting
        </chakra.h2>
        <Text color={"gray.500"} textAlign={"center"}>
          Signify is the world leader in lighting for professionals, consumers
          and lighting for the Internet of Things. Our energy efficient lighting
          products, systems and services enable our customers to enjoy a
          superior quality of light, and make people&apos;s lives safer and more
          comfortable, businesses more productive and cities more livable.
          <br></br>
          <br></br>
          With 2022 sales of EUR 7.5 billion, approximately 35,000 employees and
          a presence in over 70 countries, we&apos;re unlocking the
          extraordinary potential of light for brighter lives and a better
          world.
        </Text>
        <OurHistory />
      </Stack>
    </Container>
  );
}
