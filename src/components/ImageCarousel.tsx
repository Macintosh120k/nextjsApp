import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
type Props = {
  images?: any;
};
// Import Swiper styles

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export function ImageCarousel({ images }: Props) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((item: any, i: any) => {
        return (
          <SwiperSlide key={i}>
            <Box position="relative" w="100%" h={500}>
              <Image
                src={item.UrlProdImg}
                style={{ borderRadius: 10 }}
                fill={true}
                alt=""
              ></Image>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
