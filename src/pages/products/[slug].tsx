import { slugify } from "@/utils/slugify";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { StarIcon } from "@chakra-ui/icons";
import { ResponseApi } from "@/models/ResponseApi";
import DemoHeader from "@/components/demoHeader";
import { DisplayDrawer } from "@/components/DisplayDrawer";
import { ImageCarousel } from "@/components/ImageCarousel";
import numeral from "numeral";
import { CardProd } from "@/models/CartProd";
type Props = {
  product: ResponseApi;
};
let CantInput = 1;
const handleInputChange = (event: any) => {
  CantInput = Number(event.target.value);
};
let cartItem = new CardProd();
const handleSubmit = (newItem: any) => {
  cartItem.idProducto = newItem.idProducto;
  cartItem.NombreProducto = newItem.NombreProducto;
  cartItem.NombreItem = newItem.NombreItem;
  cartItem.Codigo = newItem.Codigo;
  cartItem.CodigoBarras = newItem.CodigoBarras;
  cartItem.NombreMarca = newItem.NombreMarca;
  cartItem.PV1 = newItem.PV1;
  cartItem.PV2 = newItem.PV2;
  cartItem.PV3 = newItem.PV3;
  cartItem.PV4 = newItem.PV4;
  cartItem.PV5 = newItem.PV5;
  cartItem.PV6 = newItem.PV6;
  cartItem.PorcDesct = newItem.PorcDesct;
  cartItem.ImagenP = newItem.ImagenP;
  cartItem.Saldo = newItem.Saldo;
  cartItem.Cant =
    Number(CantInput) <= newItem.Saldo ? Number(CantInput) : newItem.Saldo;
  let carrito: any = localStorage.getItem("carrito");
  if (cartItem.Saldo > 0) {
    if (carrito == null) {
      cartItem.Total = cartItem.Cant * cartItem.PV2;
      localStorage.setItem("carrito", JSON.stringify([cartItem]));
    } else {
      let dataStorage: any = localStorage.getItem("carrito");
      let dataCarrito: any = JSON.parse(dataStorage);
      let verif = dataCarrito.findIndex(
        (x: any) => x.idProducto == cartItem.idProducto
      );
      if (verif == -1) {
        dataCarrito.push(cartItem);
      } else {
        if (dataCarrito[verif].Cant <= dataCarrito[verif].Saldo) {
          dataCarrito[verif].Cant = cartItem.Cant == 0 ? 1 : cartItem.Cant;
        }
      }
      dataCarrito.forEach((x: any) => {
        x.Total = x.Cant * x.PV2;
      });
      localStorage.setItem("carrito", JSON.stringify(dataCarrito));
      window.dispatchEvent(new Event("storage"));
    }
  }
};

export default function ProductPage({ product }: Props) {
  let bannerMain = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  let url =
    product.Data[0].ImagenP != null
      ? product.Data[0].ImagenP.replace("/swdb/", "/")
      : "";
  product.Data[0].ImagenP = url;
  let dataProduct: any = product.Data[0];
  const startOr = dataProduct.Valoracion;
  const startGr = 5 - dataProduct.Valoracion;
  for (let i = 0; i < dataProduct.ProductImgs.length; i++) {
    let url2 = dataProduct.ProductImgs[i].UrlProdImg.replace("/swdb/", "/");
    dataProduct.ProductImgs[i].UrlProdImg = url2;
  }
  let contentText1 = dataProduct.Otros.replace(
    "<div class='d-flex flex-column lh-1'>",
    "<ul>"
  );
  dataProduct.Otros = contentText1;

  let contentText2 = dataProduct.Otros.replace("</div>", "</ul>");
  dataProduct.Otros = contentText2;

  let contentText3 = dataProduct.Otros.replace(
    new RegExp("<small>-", "g"),
    "<li>"
  );
  dataProduct.Otros = contentText3;

  let contentText4 = dataProduct.Otros.replace(
    new RegExp("</small>", "g"),
    "</li>"
  );
  dataProduct.Otros = contentText4;
  return (
    <>
      <DemoHeader></DemoHeader>
      <Head>
        <title>{product.Data[0].NombreProducto}</title>
        <meta name="description" content={product.Data[0].NombreProducto} />
      </Head>
      <Container mt={2}>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing={2}
        >
          <Box>
            <ImageCarousel images={dataProduct.ProductImgs}></ImageCarousel>
          </Box>
          <Box>
            <Box>
              <Text align="left" fontWeight="bold">
                {dataProduct.NombreMarca}
              </Text>
            </Box>
            <Box>
              <Text align="left">{dataProduct.CodigoBarras}</Text>
            </Box>
            <Box>
              <Text align="left">{dataProduct.NombreProducto}</Text>
            </Box>
            <Box
              textAlign="left"
              fontSize="sm"
              dangerouslySetInnerHTML={{ __html: dataProduct.Otros }}
              ml={5}
            ></Box>

            <Flex justifyContent="space-between">
              <Box>
                {Array(startOr)
                  .fill(null)
                  .map((item, index) =>
                    dataProduct.Valoracion == null ? (
                      <StarIcon key={index} color="gray.300" />
                    ) : (
                      <StarIcon key={index} color="orange" />
                    )
                  )}
                {Array(startGr)
                  .fill(null)
                  .map((item, index) => (
                    <StarIcon key={index} color="gray.300" />
                  ))}
              </Box>
              <Box>
                <Flex justify="flex-start">
                  {dataProduct.Saldo > 0 ? (
                    <Box
                      as="span"
                      backgroundColor="rgb(0, 255, 140)"
                      color="white"
                      borderRadius={5}
                      p={1}
                      fontSize="xs"
                    >
                      <Text fontWeight="bold">Con Stock</Text>
                    </Box>
                  ) : (
                    <Box
                      as="span"
                      backgroundColor="rgb(255, 0, 60)"
                      color="white"
                      borderRadius={5}
                      p={1}
                      fontSize="xs"
                    >
                      <Text fontWeight="bold">Sin Stock</Text>
                    </Box>
                  )}
                </Flex>
              </Box>
            </Flex>
            <Box fontWeight="bold">
              <Flex justifyItems="center" alignItems="center">
                <Text
                  color="gray.400"
                  fontSize="md"
                  align="left"
                  textDecoration="line-through"
                  mr={2}
                >
                  S/.{numeral(dataProduct.PV1).format("0,0.00")}
                </Text>
                <Text fontSize="sm" color="red">
                  {dataProduct.PorcDesct} dcto
                </Text>
              </Flex>
              <Text fontSize="xl" align="left">
                S/.{numeral(dataProduct.PV2).format("0,0.00")}
              </Text>
            </Box>
            <Box>
              <NumberInput
                onKeyUp={handleInputChange}
                maxW={150}
                defaultValue={1}
                min={1}
                max={dataProduct.Saldo}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Stack width="100%" mt={5}>
              <Button bg="brand.green" _hover={{ bg: "brand.cgreen" }}>
                Comprar por whatsapp
              </Button>
              <Box>
                {dataProduct.Saldo > 0 && (
                  <Box>
                    <DisplayDrawer>
                      <Button
                        id="btnAdd"
                        backgroundColor="brand.blue"
                        _hover={{
                          bg: "brand.cblue",
                        }}
                        borderRadius={5}
                        w="100%"
                        onClick={() =>
                          dataProduct.Saldo <= 0
                            ? null
                            : handleSubmit(dataProduct)
                        }
                      >
                        <Text
                          fontSize={{
                            base: "12px",
                            md: "15px",
                            lg: "15px",
                          }}
                          fontWeight="bold"
                          p={1}
                        >
                          Agregar al carro
                        </Text>
                      </Button>
                    </DisplayDrawer>
                  </Box>
                )}
                {dataProduct.Saldo <= 0 && (
                  <Box>
                    <Button
                      backgroundColor="brand.blue"
                      _hover={{
                        bg: "brand.cblue",
                      }}
                      borderRadius={5}
                      w="100%"
                      disabled={true}
                      cursor="not-allowed"
                    >
                      <Text
                        fontSize={{
                          base: "12px",
                          md: "15px",
                          lg: "15px",
                        }}
                        fontWeight="bold"
                        p={1}
                      >
                        No disponible
                      </Text>
                    </Button>
                  </Box>
                )}
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}
export async function getStaticPaths() {
  const products = await fetch(`${process.env.API_URL}/Productos/List`).then(
    (res) => res.json()
  );
  const slugs: string[] = products.Data.map((product: any) => {
    return `${slugify(product.NombreProducto)}-${product.idProducto}`;
  });
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const id = context.params.slug.split("-").pop();
  const product: any = await fetch(
    `${process.env.API_URL}/Productos/List?idProducto=${id}`
  ).then((res) => res.json());
  return {
    props: {
      product,
    },
  };
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
