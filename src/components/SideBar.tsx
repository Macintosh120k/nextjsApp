import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  Stack,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
type Props = {
  categories: any;
};
export function Sidebar({ categories }: Props) {
  let data: any = [];
  data = categories.Data;
  let expandI = [];
  for (let i = 0; i < data.length; i++) {
    expandI.push(i);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnSideBarRef: any = React.useRef();
  return (
    <>
      <IconButton
        ref={btnSideBarRef}
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnSideBarRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Accordion defaultIndex={[0]}>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Todo
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} onClick={onClose}>
                  <UnorderedList>
                    <ListItem as={Link}>
                      <Text>Mostrar todo</Text>
                    </ListItem>
                    <ListItem as={Link}>
                      <Text>Ofertas</Text>
                    </ListItem>
                    <ListItem as={Link}>
                      <Text>Últimos ingresos</Text>
                    </ListItem>
                    <ListItem as={Link}>
                      <Text>Asesores de venta</Text>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion defaultIndex={expandI} allowMultiple>
              {data.map((item: any, i: any) => {
                return (
                  <AccordionItem key={i}>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {item.NombreMenuEc}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel onClick={onClose}>
                      <Stack>
                        {item.MenusEc_Det.map((subItem: any, i2: any) => {
                          return (
                            <UnorderedList key={subItem.idMenuEcDet}>
                              <ListItem as={Link}>
                                <Text key={i2}>{subItem.DenoDet}</Text>
                              </ListItem>
                            </UnorderedList>
                          );
                        })}
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
