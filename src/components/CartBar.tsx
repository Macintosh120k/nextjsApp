import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Text,
  Flex,
  Button,
  Stack,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Divider,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import numeral from "numeral";
import { DeleteIcon } from "@chakra-ui/icons";
export function CartBar({ isOpen, onClose }: any) {
  const btnRef: any = React.useRef();
  const [carrito, setCarrito] = useState([]);
  useEffect(() => {
    let dataStorage: any = localStorage.getItem("carrito");
    let dataCarrito = JSON.parse(dataStorage);
    setCarrito(dataCarrito);
  }, [isOpen]);

  const handleDeleteItem = (index: number) => {
    const updatedItems = [...carrito];
    updatedItems.splice(index, 1);
    setCarrito(updatedItems);
    localStorage.setItem("carrito", JSON.stringify(updatedItems));
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottom="1px solid #dee2e6">
            Carrito de compras
          </DrawerHeader>

          <DrawerBody p={0}>
            <TableContainer>
              <Table size="sm">
                <Tbody>
                  {carrito != null
                    ? carrito.map((item: any, i: any) => (
                        <Tr key={i}>
                          <Td align="center" w={70}>
                            <Box position="relative" w={70} h={70}>
                              <Image
                                src={item.ImagenP}
                                fill={true}
                                alt=""
                              ></Image>
                            </Box>
                          </Td>
                          <Td>
                            <Box>
                              <Text align="left" fontSize="sm">
                                {item.NombreProducto}{" "}
                              </Text>
                            </Box>
                            <Divider orientation="horizontal" />
                            <Box alignItems="flex-end">
                              <Wrap spacing="2px" justify="right">
                                <WrapItem>
                                  <Text
                                    color="#858585"
                                    align="end"
                                    fontSize="sm"
                                  >
                                    {item.Cant + "x"}
                                  </Text>
                                </WrapItem>

                                <WrapItem>
                                  <Text
                                    color="#858585"
                                    fontWeight="bold"
                                    align="end"
                                    fontSize="sm"
                                  >
                                    {numeral(item.PV2).format("0,0.00")}
                                  </Text>
                                </WrapItem>
                                <WrapItem>
                                  <Text
                                    fontWeight="bold"
                                    color="black"
                                    align="end"
                                    fontSize="sm"
                                  >
                                    {"S/." +
                                      numeral(item.Total).format("0,0.00")}
                                  </Text>
                                </WrapItem>
                              </Wrap>
                            </Box>
                          </Td>
                          <Td>
                            <Button
                              size="xs"
                              bg="red"
                              onClick={() => handleDeleteItem(i)}
                            >
                              <DeleteIcon></DeleteIcon>
                            </Button>
                          </Td>
                        </Tr>
                      ))
                    : ""}
                </Tbody>
              </Table>
            </TableContainer>
          </DrawerBody>

          <Box borderTop="1px solid #dee2e6" py={4} px={6}>
            <Flex w="100%" justifyContent="space-between">
              <Box>
                <Text fontWeight="bold">Sub. Total</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">
                  {numeral(
                    carrito != null ? carrito.reduce((n, { Total }) => n + Total, 0) : 0
                  ).format("0,0.00")}
                </Text>
              </Box>
            </Flex>
            <Stack width="100%">
              <Button bg="brand.green" _hover={{ bg: "brand.cgreen" }}>
                Ver detalle de compra
              </Button>
              <Button bg="brand.blue" _hover={{ bg: "brand.cblue" }}>
                Finalizar compra
              </Button>
            </Stack>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}
