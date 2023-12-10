import React from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Hero = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Box bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
      <Stack
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 24 }}
        textAlign={"center"}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color={"pink.500"}
        >
          Designed to be seen <br />
          <Text as={"span"} color={"#FFFFFF"} fontSize={"20"}>
            Discover our new range of modern LEDs that are beautiful on and off
          </Text>
        </Heading>
        <a
          href="#service-choice"
          onClick={() => setActiveNav("#service-choice")}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            Browse our products
          </Button>
        </a>
      </Stack>
    </Box>
    //
  );
};
export default Hero;
