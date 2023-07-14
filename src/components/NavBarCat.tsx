import { ResponseApi } from "@/models/ResponseApi";
import { slugify } from "@/utils/slugify";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Grid,
  GridItem,
  Container,
  Show,
} from "@chakra-ui/react";
import Link from "next/link";
import router from "next/router";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
type Props = {
  categories: ResponseApi;
};
export function NavbarCat({ categories }: Props) {
  const showProduct = () => {
    router.push("");
  };
  return (
    <Show breakpoint="(min-width: 1000px)">
      <Box boxShadow="whitesmoke 0px 2px 3px 2px" w="100%" p="3">
        <Container as={Flex} justifyContent="space-between">
          <HStack spacing={4}>
            <Link href={"/categories/laptops-MLP"}>
              <Text fontWeight="bold">Ver todo</Text>
            </Link>
            <Menu>
              <MenuButton>
                <Text fontWeight="bold">
                  Categorias <ChevronDownIcon />
                </Text>
              </MenuButton>
              <MenuList px={0} zIndex={999}>
                <Grid templateColumns="repeat(4, 1fr)">
                  {categories.Data.map((cat: any, i: any) => {
                    return (
                      <GridItem key={i}>
                        <Box backgroundColor="#64CCC5" textAlign="center">
                          <Text fontSize="lg" as="b">
                            {cat.NombreMenuEc}
                          </Text>
                        </Box>
                        <Box>
                          {cat.MenusEc_Det.map((catDet: any, i2: any) => {
                            return (
                              <MenuItem
                                as={Link}
                                fontSize="sm"
                                key={i2}
                                paddingBottom={1}
                                style={{ textDecoration: "none" }}
                                href={`/categories/${slugify(catDet.DenoDet)}-${catDet.CodigoCat}`}
                              >
                                {catDet.DenoDet}
                              </MenuItem>
                            );
                          })}
                        </Box>
                      </GridItem>
                    );
                  })}
                </Grid>
              </MenuList>
            </Menu>
            <Text fontWeight="bold">Ofertas</Text>
            <Text fontWeight="bold">Últimos ingresos</Text>
            <Text fontWeight="bold">Asesores de venta</Text>
            <Text fontWeight="bold">Nosotros</Text>
            <Text fontWeight="bold">Contacto</Text>
          </HStack>
        </Container>
      </Box>
    </Show>
  );
}
