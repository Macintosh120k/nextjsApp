import React, { useEffect, useState } from "react";
import { ResponseApi } from "@/models/ResponseApi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Show,
  Container,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  Grid,
  GridItem,
  Text,
  Box,
  MenuItem,
} from "@chakra-ui/react";
import { Header } from "./Header";
import { NavbarCat } from "./NavBarCat";
const DemoHeader = () => {
  const [headerData, setHeaderData] = useState(Object);
  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await fetch(
          "https://dev3api.bsite.net/api/MenusEc/List"
        );
        const data = await response.json();
        setHeaderData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHeaderData();
  }, []);
  return (
    <>
      {headerData && headerData.Data ? (
        <>
          <Header categories={headerData} />
          <NavbarCat categories={headerData} />
        </>
      ) : null}
    </>
  );
};
export default DemoHeader;
