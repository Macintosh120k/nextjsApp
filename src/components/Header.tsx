import {
  Box,
  Flex,
  IconButton,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  Container,
  Badge,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Show,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import logoSoft from "/public/logoSoft.png";
import { Sidebar } from "./SideBar";
import { CartBar } from "./CartBar";
import userIcon from "/public/user.svg";
import cartIcon from "/public/cart.svg";
import { DisplayDrawer } from "./DisplayDrawer";
import { useEffect, useState } from "react";
import numeral from "numeral";
import Link from "next/link";
type Props = {
  categories: any;
};
export function Header({ categories }: Props) {
  const [carrito, setCarrito] = useState([]);
  useEffect(() => {
    let dataStorage: any = localStorage.getItem("carrito");
    let dataCarrito = JSON.parse(dataStorage);
    setCarrito(dataCarrito);
  }, []);
  useEffect(() => {
    const listenStorageChange = () => {
      let dataStorage: any = localStorage.getItem("carrito");
      let dataCarrito = JSON.parse(dataStorage);
      setCarrito(dataCarrito);
    };
    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
  }, []);
  return (
    <Box bg="brand.main" top={0} position="sticky" zIndex={99} w="100%" p="2">
      <Container
        as={Flex}
        color="white"
        justifyContent="space-between"
        fontSize="xs"
      >
        <Flex alignItems="center">
          <Link href="/" style={{cursor:"pointer"}}>
            <Image src={logoSoft} height={40} alt="Logo" />
          </Link>
          <Sidebar categories={categories}></Sidebar>
        </Flex>
        <Show breakpoint="(min-width: 1000px)">
          <InputGroup color="black" ml={5}>
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input
              type="text"
              backgroundColor="white"
              placeholder="¿Que estás buscando?"
            />
          </InputGroup>
        </Show>

        <Flex>
          <Menu>
            <MenuButton>
              <IconButton
                as={Box}
                icon={<Image src={userIcon} fill={true} alt=""></Image>}
                aria-label="icon-user"
                color="white"
              ></IconButton>
            </MenuButton>
            <MenuList color="black">
              <MenuItem>Mi cuenta</MenuItem>
              <MenuItem>Mis pedidos</MenuItem>
              <MenuItem>Cerrar Sesion</MenuItem>
            </MenuList>
          </Menu>

          <DisplayDrawer>
            <Box position="relative">
              <IconButton
                icon={<Image src={cartIcon} fill={true} alt=""></Image>}
                aria-label="Open Menu"
                color="white"
              />
              <Flex position="absolute" top={0} left={6} zIndex={9}>
                <Badge ml="1" backgroundColor="red" color="white">
                  {carrito.length}
                </Badge>
              </Flex>
            </Box>
          </DisplayDrawer>
        </Flex>
      </Container>
    </Box>
  );
}
