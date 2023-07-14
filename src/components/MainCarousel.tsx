import Image from "next/image";
import { Container, Show, Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
type Props = {
  data: any;
};
export function MainCarousel({ data }: Props) {
  for (let i = 0; i < data.length; i++) {
    let url = data[i].UrlBanner.replace("/swdb/", "/");
    data[i].UrlBanner = url;
  }
  let dataBanner1: any = data.filter((x: any) => x.TipoBanner == "MP");
  let dataBanner2: any = data.filter((x: any) => x.TipoBanner != "MP");
  return (
    <Container marginTop={2}>
      <Show below="sm">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          loop={true}
        >
          {dataBanner1.map((item: any, i: any) => {
            return (
              <SwiperSlide key={i}>
                <Box position="relative" w="100%" h={500}>
                  <Image
                    src={item.UrlBanner}
                    style={{ borderRadius: 10 }}
                    fill={true}
                    alt=""
                  ></Image>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Show>
      <Show above="md">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          loop={true}
        >
          {dataBanner2.map((item: any, i: any) => {
            return (
              <SwiperSlide key={i}>
                <Box position="relative" w="100%" h={500}>
                  <Image
                    src={item.UrlBanner}
                    style={{ borderRadius: 10 }}
                    fill={true}
                    alt=""
                  ></Image>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Show>
    </Container>
  );
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
