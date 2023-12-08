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
  Avatar,
  Image,
} from "@chakra-ui/react";

export default function OurCulture() {
  return (
    <Container maxW={"5xl"} mt={7} mb={"12"}>
      <chakra.h2 fontSize="3xl" fontWeight={"700"} textAlign={"center"} mb={7}>
        Creating a diverse and inclusive environment for everyone!{" "}
      </chakra.h2>

      <Card maxW="md">
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        />
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
}
