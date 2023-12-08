"use client";

// import {
//   Box,
//   Button,
//   Center,
//   chakra,
//   Container,
//   Flex,
//   Heading,
//   Icon,
//   Stack,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { ReactElement } from "react";
// import { FcAssistant, FcCollaboration } from "react-icons/fc";

// // const Card = ({ heading, description, icon, href }) => {
// //   return (
// //     <Box
// //       maxW={{ base: "full", md: "275px" }}
// //       w={"full"}
// //       borderWidth="1px"
// //       borderRadius="lg"
// //       overflow="hidden"
// //       p={5}
// //       textAlign={"center"}
// //     >
// //       <Stack align={"start"} spacing={2}>
// //         <Flex
// //           w={16}
// //           h={16}
// //           align={"center"}
// //           justify={"center"}
// //           color={"white"}
// //           rounded={"full"}
// //           bg={useColorModeValue("gray.100", "gray.700")}
// //         >
// //           {icon}
// //         </Flex>
// //         <Box mt={2}>
// //           <Heading size="md">{heading}</Heading>
// //           <Text mt={1} fontSize={"sm"}>
// //             {description}
// //           </Text>
// //         </Box>
// //       </Stack>
// //     </Box>
// //   );
// // };

// export default function OurTeam() {
//   return (
//     <Box p={4}>
//       <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
//         <chakra.h2 fontSize="3xl" fontWeight={"700"}>
//           Our Team
//         </chakra.h2>
//         <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
//           The Team is responsible for the day-to-day management of Signify. The
//           Team is composed of the following members.
//         </Text>
//       </Stack>

//       <Container maxW={"5xl"} mt={12}>
//         <Flex flexWrap="wrap" gridGap={6} justify="center">
//           <Card
//             heading={"For Professionals"}
//             icon={<Icon as={FcAssistant} w={10} h={10} />}
//             description={
//               "Energy-efficient LED lighting and smart lighting control minimizes lighting energy usage and help you achieve your sustainability goals."
//             }
//             href={"#"}
//           />
//           <Card
//             heading={"For Consumers"}
//             icon={<Icon as={FcCollaboration} w={10} h={10} />}
//             description={
//               "Whether setting the mood in the living room or brightening up your kitchen, our energy-efficient LED lamps and luminaires offer customizable solutions."
//             }
//             href={"#"}
//           />
//           <Card
//             heading={"For Consumers"}
//             icon={<Icon as={FcCollaboration} w={10} h={10} />}
//             description={
//               "Whether setting the mood in the living room or brightening up your kitchen, our energy-efficient LED lamps and luminaires offer customizable solutions."
//             }
//             href={"#"}
//           />
//           <Card
//             heading={"For Consumers"}
//             icon={<Icon as={FcCollaboration} w={10} h={10} />}
//             description={
//               "Whether setting the mood in the living room or brightening up your kitchen, our energy-efficient LED lamps and luminaires offer customizable solutions."
//             }
//             href={"#"}
//           />
//         </Flex>
//       </Container>
//     </Box>
//   );
// }

import {
  Container,
  Card,
  CardBody,
  Center,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  chakra,
} from "@chakra-ui/react";

export default function OurTeam() {
  return (
    <Container maxW={"5xl"} mt={7} mb={"12"} pb={{ base: 20, md: 20 }}>
      <chakra.h2 fontSize="3xl" fontWeight={"700"} textAlign={"center"} mb={7}>
        Meet Our Team!
      </chakra.h2>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        <Card maxWidth={"300"}>
          <CardBody>
            <Center>
              <Image
                maxHeight={"200"}
                src="https://www.signify.com/b-dam/b2b-li/en_AA/investor/governance-leadership/management-board/eric-rondolat-2022.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                // width={"40"}
              />
            </Center>
            <Stack mt="6" spacing="3">
              <Heading size="md" textAlign={"center"}>
                Eric Rondolat
              </Heading>
              <Text fontSize={"12"} paddingBottom={"5"} textAlign={"center"}>
                Chief Executive Officer (CEO)
              </Text>
              <Text textAlign={"justify"} fontSize={"14"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas facilis consectetur ut voluptate harum voluptatum
                labore quae veniam, ab quam nemo architecto! Error fugiat
                asperiores ipsam aspernatur, architecto laudantium distinctio.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
        <Card maxWidth={"300"}>
          <CardBody>
            <Center>
              <Image
                maxHeight={"200"}
                src="https://www.signify.com/b-dam/b2b-li/en_AA/investor/governance-leadership/management-board/javier-vanengelen-2022.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                // width={"40"}
              />
            </Center>
            <Stack mt="6" spacing="3">
              <Heading size="md" textAlign={"center"}>
                Javier Van Engelen
              </Heading>
              <Text fontSize={"12"} paddingBottom={"5"} textAlign={"center"}>
                Chief Financial Officer (CFO)
              </Text>

              <Text textAlign={"justify"} fontSize={"14"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas facilis consectetur ut voluptate harum voluptatum
                labore quae veniam, ab quam nemo architecto! Error fugiat
                asperiores ipsam aspernatur, architecto laudantium distinctio.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
        <Card maxWidth={"300"}>
          <CardBody>
            <Center>
              <Image
                maxHeight={"200"}
                src="https://www.signify.com/b-dam/b2b-li/en_AA/investor/governance-leadership/management-board/letizia-mariani-2022.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                // width={"40"}
              />
            </Center>
            <Stack mt="6" spacing="3">
              <Heading size="md" textAlign={"center"}>
                Maria Letizia Mariani
              </Heading>
              <Text fontSize={"12"} paddingBottom={"5"} textAlign={"center"}>
                Chief Commercial Officer (CCO)
              </Text>
              <Text textAlign={"justify"} fontSize={"14"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas facilis consectetur ut voluptate harum voluptatum
                labore quae veniam, ab quam nemo architecto! Error fugiat
                asperiores ipsam aspernatur, architecto laudantium distinctio.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </Flex>
    </Container>
  );
}