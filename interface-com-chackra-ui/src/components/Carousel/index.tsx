import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { api } from "@/libs/api";
import { Flex, chakra } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

interface continentsProps {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export const Carousel = () => {
  const { data: continents } = useQuery<continentsProps[]>(
    ["continents"],
    async () => {
      const response = await api.get("/continents");
      return response.data;
    }
  );

  const Slide = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <Flex
      w="100%"
      h="450px"
      maxWidth="1240px"
      mx="auto"
      mb="10"
      borderRadius={8}
      overflow="hidden"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
      >
        {continents?.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
            >
              <Slide
                bgPosition="100% "
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
                src={continent.image}
                alt={continent.title}
                width={1240}
                height={450}
              />
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
