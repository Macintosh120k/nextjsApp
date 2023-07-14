import {
  Box,
  Container,
  Flex,
  ListItem,
  UnorderedList,
  Text,
  Grid,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import logoSoft from "/public/logoSoft.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export function Footer() {
  return (
    <Box as="footer" bg="brand.main" color="whitesmoke" w="100%">
      <Grid as={Container} templateColumns={
        {
          base:"repeat(2, 1fr)",
          md:"repeat(4, 1fr)"
        }
      } p={10} gap={6}>
        <Box w="100%">
          <Image src={logoSoft} height={50} alt="Logo" />
        </Box>
        <Box>
          <Text>Nosotros</Text>
          <UnorderedList listStyleType="none">
            <ListItem>Nuestras tiendas</ListItem>
            <ListItem>Contáctanos</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text>Servicio al cliente</Text>
          <UnorderedList listStyleType="none">
            <ListItem>Términos y Condiciones</ListItem>
            <ListItem>Garantías</ListItem>
            <ListItem>Devoluciones</ListItem>
            <ListItem>Libro de reclamaciones</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text>Mi Cuenta</Text>
          <UnorderedList listStyleType="none">
            <ListItem>Mis pedidos</ListItem>
            <ListItem>Preguntas frecuentes</ListItem>
          </UnorderedList>
        </Box>
      </Grid>
      <Box>
        <Text align="center">
          Maclaptop © 2023 Desarrollado por
          <Link
            href="https://api.whatsapp.com/send?phone=51929972411"
            isExternal
          >
            &nbsp;CoderX
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
