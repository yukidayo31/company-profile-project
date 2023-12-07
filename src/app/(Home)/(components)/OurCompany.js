"use client";

import {
  Box,
  VStack,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import CompanyVid from "../CompanyVid";

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function OurCompany() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 id="company-intro" fontSize="3xl" fontWeight="700">
              Our Company
            </chakra.h2>
            <CompanyVid />
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p pt={58}>
              Signify is the world leader in lighting for professionals,
              consumers and lighting for the Internet of Things. Our energy
              efficient lighting products, systems and services enable our
              customers to enjoy a superior quality of light and make
              people&apos;s lives safer and more comfortable, and businesses
              more productive and cities more livable.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"Number one"}
          text={"In conventional lighting, LED and connected lighting"}
        />
        <Feature heading={"114 million"} text={"Connected light points"} />
        <Feature heading={"7.5 billion"} text={"Euro sales in 2022"} />
        <Feature heading={"100% carbon neutral"} text={"Global operations"} />
      </Grid>
    </Box>
  );
}
