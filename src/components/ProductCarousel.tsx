import { ResponseApi } from "@/models/ResponseApi";
import React from "react";
import { Product } from "./Product";
import { Box, Container, Slider, Text, border } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
  data: ResponseApi;
};
export function ProductCarousel({ data }: Props) {
  for (let i = 0; i < data.Data.Product_carousel.length; i++) {
    let url2 = data.Data.Product_carousel[i].ImagenP.replace("/swdb/", "/");
    data.Data.Product_carousel[i].ImagenP = url2;
    let icon = data.Data.Product_carousel[i].ValoracionHtml.replace(
      "<i class='fas fa-star text-warning'></i>",
      "<StarIcon color='orange' />"
    );
    data.Data.Product_carousel[i].ValoracionHtml = icon;
    let icon2 = data.Data.Product_carousel[i].ValoracionHtml.replace(
      "<i class='far fa-star text-warning'></i>",
      "<StarIcon color='gray.300' />"
    );
    data.Data.Product_carousel[i].ValoracionHtml = icon2;

    let contentText1 = data.Data.Product_carousel[i].Otros.replace(
      "<div class='d-flex flex-column lh-1'>",
      "<ul>"
    );
    data.Data.Product_carousel[i].Otros = contentText1;

    let contentText2 = data.Data.Product_carousel[i].Otros.replace(
      "</div>",
      "</ul>"
    );
    data.Data.Product_carousel[i].Otros = contentText2;

    let contentText3 = data.Data.Product_carousel[i].Otros.replace(
      new RegExp("<small>-", "g"),
      "<li>"
    );
    data.Data.Product_carousel[i].Otros = contentText3;

    let contentText4 = data.Data.Product_carousel[i].Otros.replace(
      new RegExp("</small>", "g"),
      "</li>"
    );
    data.Data.Product_carousel[i].Otros = contentText4;
  }
  return (
    <Container>
      <Box width="100%" className="titleRect">
        <Text
          align="center"
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="2xl"
        >
          Ofertas
        </Text>
      </Box>
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
        navigation={true}
        breakpoints={{
          200: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        {data.Data.Product_carousel.map((item: any, i: any) => {
          return (
            <SwiperSlide key={i}>
              <Product data={item}></Product>
            </SwiperSlide>
          );
        })}
      </Swiper>
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
