import { StarIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { ProductModal } from "./ProductModal";
import numeral from "numeral";
import Link from "next/link";
import { DisplayDrawer } from "./DisplayDrawer";
import { CardProd } from "@/models/CartProd";
import { useRouter } from "next/router";
import { slugify } from "@/utils/slugify";
type Props = {
  data: any;
};

export function Product({ data }: Props) {
  const router = useRouter();
  let cartItem = new CardProd();
  const startOr = data.Valoracion;
  const startGr = 5 - data.Valoracion;
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
    cartItem.Cant = 1;
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
          if (dataCarrito[verif].Cant < dataCarrito[verif].Saldo) {
            dataCarrito[verif].Cant = dataCarrito[verif].Cant + 1;
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
  return (
    <Box
      margin={{
        base: "0.2rem",
        sm: "0.4rem",
        md: "0.4rem",
      }}
      _hover={{
        transition: "all 0.7s ease-out",
        transform: "translateY(-1%)",
        "#divDcto,#btnAdd": {
          backgroundColor: "#00ff8c",
        },
      }}
    >
      <Box
        position="relative"
        display="inline-block"
        textAlign="center"
        width="100%"
        height="100%"
        boxShadow="0px 0px 3px 0px rgb(226, 226, 226)"
        borderRadius={10}
      >
        <Box position="absolute" left={0} zIndex={9}>
          <Box
            id="divDcto"
            fontSize={15}
            backgroundColor="#2dc1c6"
            color="white"
            padding={2}
            borderTopLeftRadius={10}
            borderBottomRightRadius={10}
            fontWeight="bold"
          >
            {data.PorcDesct} dcto
          </Box>
        </Box>
        <Box position="absolute" p={0} top={1} right={2} zIndex={9}>
          <ProductModal dataProduct={data}></ProductModal>
        </Box>
        <Box
          as={Link}
          paddingTop={35}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="230px"
          href={`/products/${slugify(data.NombreProducto)}-${data.idProducto}`}
        >
          <Box position="relative" w="100%" h="100%">
            <Image
              src={data.ImagenP}
              style={{ borderRadius: 10 }}
              fill={true}
              alt=""
            ></Image>
          </Box>
        </Box>
        <Flex justifyContent="space-between" p={2}>
          <Box>
            {Array(startOr)
              .fill(null)
              .map((item, index) =>
                data.Valoracion == null ? (
                  <StarIcon
                    fontSize={{
                      base: "sm",
                      md: "md",
                    }}
                    key={index}
                    color="gray.300"
                  />
                ) : (
                  <StarIcon
                    fontSize={{
                      base: "sm",
                      md: "md",
                    }}
                    key={index}
                    color="orange"
                  />
                )
              )}
            {Array(startGr)
              .fill(null)
              .map((item, index) => (
                <StarIcon
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                  key={index}
                  color="gray.300"
                />
              ))}
          </Box>
          <Box>
            <Flex justify="flex-start">
              {data.Saldo > 0 ? (
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
        <VStack align="start" h={250} p={2} gap={0}>
          <Box>
            <Text fontWeight="bold">{data.NombreMarca}</Text>
          </Box>
          <Box>
            <Text color="gray.500">{data.CodigoBarras}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" align="start">
              {data.NombreProducto}
            </Text>
          </Box>
          <Box
            marginLeft={5}
            marginRight={5}
            as="div"
            textAlign="left"
            fontSize="sm"
            dangerouslySetInnerHTML={{ __html: data.Otros }}
          ></Box>
        </VStack>
        <Box marginLeft={4} marginRight={4} fontWeight="bold">
          <Text
            color="gray.400"
            fontSize="md"
            align="left"
            textDecoration="line-through"
          >
            S/.{numeral(data.PV1).format("0,0.00")}
          </Text>
          <Text fontSize="xl" align="left">
            S/.{numeral(data.PV2).format("0,0.00")}
          </Text>
        </Box>
        {data.Saldo > 0 && (
          <Box p={2}>
            <DisplayDrawer>
              <Button
                id="btnAdd"
                backgroundColor="#64c9dc"
                borderRadius={5}
                w="100%"
                onClick={() => (data.Saldo <= 0 ? null : handleSubmit(data))}
              >
                <Text
                  fontSize={{ base: "12px", md: "15px", lg: "15px" }}
                  fontWeight="bold"
                  p={1}
                >
                  Agregar al carro
                </Text>
              </Button>
            </DisplayDrawer>
          </Box>
        )}
        {data.Saldo <= 0 && (
          <Box p={2}>
            <Button
              backgroundColor="#64c9dc"
              borderRadius={5}
              w="100%"
              disabled={true}
              cursor="not-allowed"
            >
              <Text
                fontSize={{ base: "12px", md: "15px", lg: "15px" }}
                fontWeight="bold"
                p={1}
              >
                No disponible
              </Text>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
