"use client";

import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import OurCompany from "./OurCompany";
import ProductsService from "./ProductsService";
import Testi from "./Testi";
import Footer from "../Footer";
import NextPageNav from "./Cards";

export default function Hero() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          // textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            textAlign={"center"}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            The meaning of <br />
            <Text as={"span"} color={"green.400"}>
              Light
            </Text>
          </Heading>
          <Text color={"gray.500"} textAlign={"center"}>
            Signify is the world leader in lighting. We provide professional
            customers and consumers with quality products, systems and services.
            Our purpose is to unlock the extraordinary potential of light for
            brighter lives and a better world.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <a
              href="#company-intro"
              onClick={() => setActiveNav("#company-intro")}
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
                Get Started
              </Button>
            </a>
          </Stack>
          <OurCompany />

          <ProductsService />
          <Testi />
          <Grid>
            <NextPageNav />
          </Grid>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
