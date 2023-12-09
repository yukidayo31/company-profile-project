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

export default function OurCulture() {
  return (
    <Container maxW={"5xl"} mt={7} mb={"12"}>
      <chakra.h2 fontSize="3xl" fontWeight={"700"} textAlign={"center"} mb={7}>
        Creating a diverse and inclusive environment for everyone!
      </chakra.h2>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        <Card maxW="md">
          <Image
            objectFit="cover"
            src="https://www.signify.com/content/dam/signify/en-aa/about/diversity-inclusion/diversity-inclusion-workplace.jpg"
            alt="Diversity & Inclusion Board"
          />
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading size="sm">Diversity & Inclusion Board</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              The Global D&I Board was set-up in 2019 to advance Signify&apos;s
              diversity & inclusion agenda. The Board meets on a regular basis
              to discuss and review the D&I agenda. The current board comprises
              of members from the Signify leadership team and other
              non-leadership team members.
            </Text>
          </CardBody>
        </Card>
        <Card maxW="md">
          <Image
            objectFit="cover"
            src="https://www.signify.com/content/dam/signify/en-aa/about/diversity-inclusion/diversity-meeting.jpg"
            alt="Diversity & Inclusion Champions"
          />
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading size="sm">Diversity & Inclusion Champions</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Diversity & Inclusion is recognized by our employees as not just a
              company strategy but as a passion to follow. We established a
              network of enthusiastic individuals driving D&I initiatives in
              their locations and sharing good practices.
            </Text>
          </CardBody>
        </Card>
        <Card maxW="md">
          <Image
            objectFit="cover"
            src="https://www.signify.com/content/dam/signify/en-aa/about/diversity-inclusion/diversity-inclusion-workstation.jpg"
            alt="Equal remuneration"
          />
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading size="sm">Equal remuneration</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Our Integrity code explicitly condemns all forms of discrimination
              based on race, color, age, gender, gender identity or expression,
              sexual orientation, language, religion, political or other
              opinions, disability, national or social origin or birth.
            </Text>
          </CardBody>
        </Card>
        <Card maxW="md">
          <Image
            objectFit="cover"
            src="https://www.signify.com/content/dam/signify/en-aa/about/diversity-inclusion/diversity-inclusion-workspace.jpg"
            alt="Our Connection point groups"
          />
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading size="sm">Our Connection point groups</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Employee D&I connection groups provide Signify employees a
              platform to connect and grow based on shared characteristics, life
              experiences, and/or interests.
            </Text>
          </CardBody>
        </Card>
        <Card maxW="md">
          <Image
            objectFit="cover"
            src="https://www.signify.com/content/dam/signify/en-aa/about/diversity-inclusion/diversity-inclusion-colleagues.jpg"
            alt="Leadership development"
          />
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading size="sm">Leadership development</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              At Signify we are committed to developing our people through
              various leadership and talent programs. All our talent and
              leadership programs have diversity and inclusion at its core.
              “EDGE” is our portfolio of leadership development programs
              designed to enable the development of genuine, empowered and
              inclusive leaders.
            </Text>
          </CardBody>
        </Card>
        <Card maxW="md">
          <Image
            objectFit="cover"
            src="https://www.signify.com/content/dam/signify/en-aa/about/diversity-inclusion/diversity-inclusion-colleagues-at-work.jpg"
            alt="WomenForMore"
          />
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading size="sm">Women For More</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              At Signify we are committed to developing talents through various
              programs. The “Women For More” program is designed for women to
              network, drive change and foster their career development.
            </Text>
          </CardBody>
        </Card>
      </Flex>
    </Container>
  );
}
