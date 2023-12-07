import React from "react";
import { Container, Text, Stack, chakra } from "@chakra-ui/react";

const OurHistory = () => {
  return (
    <Stack spacing={4} as={Container} maxW={"3xl"}>
      <chakra.h2 mt={10} fontSize="3xl" fontWeight={"700"}>
        Our History
      </chakra.h2>
      <Text color={"gray.600"}>
        Signify (Euronext: LIGHT), the world leader in lighting, has launched
        its new company name, following the amendment of the company&apos;s
        articles of association changing its name from Philips Lighting N.V. to
        Signify N.V. Signify will continue to use the Philips brand for its
        products, the most trusted lighting brand in the world, under the
        existing licensing agreement with Royal Philips.
        <br></br>
        <br></br>
        The company expects the name change to be implemented in all the
        countries where it is active by the beginning of 2019. Founded as
        Philips in Eindhoven, the Netherlands, the company has led the lighting
        industry with innovations that serve professional and consumer markets
        for more than 128 years. In 2016, Signify spun off from Philips,
        becoming a separate company, listed on Amsterdam&apos;s Euronext Stock
        Exchange.
      </Text>
    </Stack>
  );
};

export default OurHistory;
