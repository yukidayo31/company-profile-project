// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

// import Chakra UI
import {
  Container,
  chakra,
  Center,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";

export default function Testimonials() {
  return (
    <>
      <chakra.h2
        id="service-choice"
        fontSize="3xl"
        fontWeight={"700"}
        textAlign={"center"}
        mb={7}
      >
        What They Say About Our Products
      </chakra.h2>
      <Container
        bgColor={"green.100"}
        maxW={"3xl"}
        py={{ base: 36, md: 36 }}
        my={54}
        borderRadius={"7"}
        textAlign={"center"}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ dynamicBullets: true }}
          navigation
        >
          <SwiperSlide>
            <Stack>
              <Center>
                <Image
                  src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg"
                  alt="Picture of the author"
                  w={36}
                  h={36}
                  borderRadius={100}
                />
              </Center>
              <chakra.h3 fontWeight={500}>Efficient Collaborating!</chakra.h3>
              <Text mt={5} px={12}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </Text>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack>
              <Center>
                <Image
                  src="https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg"
                  alt="Picture of the author"
                  w={36}
                  h={36}
                  borderRadius={100}
                />
              </Center>
              <chakra.h3 fontWeight={500}>Intuitive Design!</chakra.h3>
              <Text mt={5} px={12}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </Text>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack>
              <Center>
                <Image
                  src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Picture of the author"
                  w={36}
                  h={36}
                  borderRadius={100}
                />
              </Center>
              <chakra.h3 fontWeight={500}>Mindblowing Service!</chakra.h3>
              <Text mt={5} px={12}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </Text>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
